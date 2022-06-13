window.BENCHMARK_DATA = {
  "lastUpdate": 1655146768708,
  "repoUrl": "https://github.com/lzchen/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.10 - sdk": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146536438,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22575.00465256065,
            "unit": "iter/sec",
            "range": "stddev: 0.000023863919734043064",
            "extra": "mean: 44.29677935355692 usec\nrounds: 4020"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15730.004708932061,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319849408958539",
            "extra": "mean: 63.57277181437613 usec\nrounds: 9260"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.10 - propagator": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146555101,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 116647.25305493796,
            "unit": "iter/sec",
            "range": "stddev: 6.075273203949543e-7",
            "extra": "mean: 8.572855114976646 usec\nrounds: 12610"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 210503.3082788316,
            "unit": "iter/sec",
            "range": "stddev: 3.614924187502837e-7",
            "extra": "mean: 4.750519163696018 usec\nrounds: 67106"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146625018,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 77419.89998147727,
            "unit": "iter/sec",
            "range": "stddev: 6.099444532658804e-7",
            "extra": "mean: 12.916575715536318 usec\nrounds: 15129"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 136488.36756238638,
            "unit": "iter/sec",
            "range": "stddev: 3.5426520890202216e-7",
            "extra": "mean: 7.326631696601676 usec\nrounds: 61729"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - sdk": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146636580,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21267.155278052356,
            "unit": "iter/sec",
            "range": "stddev: 0.000001137343541662734",
            "extra": "mean: 47.02086324784571 usec\nrounds: 3978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14747.981643411345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018207987696982051",
            "extra": "mean: 67.80588857369169 usec\nrounds: 4936"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146759412,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2922.8978633048528,
            "unit": "iter/sec",
            "range": "stddev: 0.000020280506181683437",
            "extra": "mean: 342.1262208831763 usec\nrounds: 1245"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5765.112345472841,
            "unit": "iter/sec",
            "range": "stddev: 0.0007946786677853517",
            "extra": "mean: 173.4571574802472 usec\nrounds: 6223"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - sdk": [
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "srikanthccv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e073d4dafaad42506c08d70727a8c9d47663ca23",
          "message": "Add support for OTLP/HTTP log exporter (#2462)",
          "timestamp": "2022-06-13T19:42:23+05:30",
          "tree_id": "9d8330bf5642f1ea78ec330c9baf42dd5c41f759",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/e073d4dafaad42506c08d70727a8c9d47663ca23"
        },
        "date": 1655146766979,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22707.613507104325,
            "unit": "iter/sec",
            "range": "stddev: 0.000002232254130444667",
            "extra": "mean: 44.03809320108162 usec\nrounds: 5751"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16454.902687806207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015286927842285443",
            "extra": "mean: 60.77216128060382 usec\nrounds: 6498"
          }
        ]
      }
    ]
  }
}