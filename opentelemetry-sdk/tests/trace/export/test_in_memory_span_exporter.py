# Copyright 2019, OpenTelemetry Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import unittest
from unittest import mock

from opentelemetry import trace as trace_api
from opentelemetry.sdk import trace
from opentelemetry.sdk.trace import export
from opentelemetry.sdk.trace.export.in_memory_span_exporter import (
    InMemorySpanExporter,
)


class TestInMemorySpanExporter(unittest.TestCase):
    def test_get_finished_spans(self):
        tracer = trace.Tracer()

        memory_exporter = InMemorySpanExporter()
        span_processor = export.SimpleExportSpanProcessor(memory_exporter)
        tracer.add_span_processor(span_processor)

        with tracer.start_as_current_span("foo"):
            with tracer.start_as_current_span("bar"):
                with tracer.start_as_current_span("xxx"):
                    pass

        span_list = memory_exporter.get_finished_spans()
        spans_names_list = [span.name for span in span_list]
        self.assertListEqual(["xxx", "bar", "foo"], spans_names_list)

    def test_clear(self):
        tracer = trace.Tracer()

        memory_exporter = InMemorySpanExporter()
        span_processor = export.SimpleExportSpanProcessor(memory_exporter)
        tracer.add_span_processor(span_processor)

        with tracer.start_as_current_span("foo"):
            with tracer.start_as_current_span("bar"):
                with tracer.start_as_current_span("xxx"):
                    pass

        memory_exporter.clear()
        span_list = memory_exporter.get_finished_spans()
        self.assertEqual(len(span_list), 0)

    def test_shutdown(self):
        tracer = trace.Tracer()

        memory_exporter = InMemorySpanExporter()
        span_processor = export.SimpleExportSpanProcessor(memory_exporter)
        tracer.add_span_processor(span_processor)

        with tracer.start_as_current_span("foo"):
            with tracer.start_as_current_span("bar"):
                with tracer.start_as_current_span("xxx"):
                    pass

        span_list = memory_exporter.get_finished_spans()
        self.assertEqual(len(span_list), 3)

        memory_exporter.shutdown()

        # after shutdown no new spans are accepted
        with tracer.start_as_current_span("foo"):
            with tracer.start_as_current_span("bar"):
                with tracer.start_as_current_span("xxx"):
                    pass

        span_list = memory_exporter.get_finished_spans()
        self.assertEqual(len(span_list), 3)

    def test_return_code(self):
        span = trace.Span("name", mock.Mock(spec=trace_api.SpanContext))
        span_list = (span,)
        memory_exporter = InMemorySpanExporter()

        ret = memory_exporter.export(span_list)
        self.assertEqual(ret, export.SpanExportResult.SUCCESS)

        memory_exporter.shutdown()

        # after shutdown export should fail
        ret = memory_exporter.export(span_list)
        self.assertEqual(ret, export.SpanExportResult.FAILED_NOT_RETRYABLE)
