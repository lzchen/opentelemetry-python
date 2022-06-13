window.BENCHMARK_DATA = {
  "lastUpdate": 1655147460728,
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
      },
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
        "date": 1655147360612,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29229.618722133488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013657899293453776",
            "extra": "mean: 34.21187287820391 usec\nrounds: 5184"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21484.46038371882,
            "unit": "iter/sec",
            "range": "stddev: 0.000001269913872645331",
            "extra": "mean: 46.54526956412701 usec\nrounds: 6926"
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
      },
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
        "date": 1655147365950,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 133224.87985386874,
            "unit": "iter/sec",
            "range": "stddev: 4.3118326450950954e-7",
            "extra": "mean: 7.506105474419469 usec\nrounds: 15198"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 249393.69746421333,
            "unit": "iter/sec",
            "range": "stddev: 3.429556445891288e-7",
            "extra": "mean: 4.009724424345145 usec\nrounds: 70917"
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
      },
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
        "date": 1655147457785,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 69214.04757116972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022978734758316374",
            "extra": "mean: 14.447934127414591 usec\nrounds: 11249"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 131139.87758153162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017957223048730462",
            "extra": "mean: 7.625445581023095 usec\nrounds: 53474"
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
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
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
        "date": 1655146772844,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 83653.26016908525,
            "unit": "iter/sec",
            "range": "stddev: 9.803397168724982e-7",
            "extra": "mean: 11.954106725532714 usec\nrounds: 11806"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 169678.5977351766,
            "unit": "iter/sec",
            "range": "stddev: 5.010533835675079e-7",
            "extra": "mean: 5.893495192367959 usec\nrounds: 58137"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.10 - exporter": [
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
        "date": 1655146840994,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3903.230525653993,
            "unit": "iter/sec",
            "range": "stddev: 0.000007086397829762046",
            "extra": "mean: 256.19803735072713 usec\nrounds: 1419"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 7825.428937785757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007253164658488068",
            "extra": "mean: 127.78852225868592 usec\nrounds: 7862"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
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
        "date": 1655146858689,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 111842.37673169088,
            "unit": "iter/sec",
            "range": "stddev: 5.053663169281423e-7",
            "extra": "mean: 8.941154768187674 usec\nrounds: 15268"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 238596.93166772448,
            "unit": "iter/sec",
            "range": "stddev: 2.6744521476861885e-7",
            "extra": "mean: 4.191168733857076 usec\nrounds: 65790"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - sdk": [
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
        "date": 1655146884148,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28433.156456379358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012536509495260623",
            "extra": "mean: 35.170207062101845 usec\nrounds: 5211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20657.972825017292,
            "unit": "iter/sec",
            "range": "stddev: 0.000001579522105686582",
            "extra": "mean: 48.407460328778065 usec\nrounds: 7184"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - sdk": [
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
        "date": 1655147008319,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22672.84410081769,
            "unit": "iter/sec",
            "range": "stddev: 0.000015722161926812334",
            "extra": "mean: 44.10562678212635 usec\nrounds: 5190"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15235.164468289404,
            "unit": "iter/sec",
            "range": "stddev: 0.000032583092201527645",
            "extra": "mean: 65.6376242003431 usec\nrounds: 7033"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
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
        "date": 1655147010327,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 100773.90723176769,
            "unit": "iter/sec",
            "range": "stddev: 0.000014684936050097463",
            "extra": "mean: 9.923203609641948 usec\nrounds: 12578"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 178599.27973132467,
            "unit": "iter/sec",
            "range": "stddev: 0.000017542253259623758",
            "extra": "mean: 5.599126723827482 usec\nrounds: 61346"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
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
        "date": 1655147055665,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3186.525092108141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060913605462421875",
            "extra": "mean: 313.821473578424 usec\nrounds: 1495"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5391.488305921705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008596670187152158",
            "extra": "mean: 185.47754224035998 usec\nrounds: 6250"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
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
        "date": 1655147218071,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 4243.739111070828,
            "unit": "iter/sec",
            "range": "stddev: 0.000006139256489996415",
            "extra": "mean: 235.6412526376224 usec\nrounds: 1611"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 8434.955213155195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624013705828547",
            "extra": "mean: 118.55427500556203 usec\nrounds: 9018"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
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
        "date": 1655147250971,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2330.457455589839,
            "unit": "iter/sec",
            "range": "stddev: 0.00012128914044814882",
            "extra": "mean: 429.10030286174003 usec\nrounds: 1258"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5154.91335753329,
            "unit": "iter/sec",
            "range": "stddev: 0.0008964676454462156",
            "extra": "mean: 193.98968142473618 usec\nrounds: 8425"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy-3.7 - propagator": [
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
        "date": 1655147271279,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 334128.4185426934,
            "unit": "iter/sec",
            "range": "stddev: 0.000006146395460982576",
            "extra": "mean: 2.99286126083357 usec\nrounds: 55249"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 655721.8442216676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045389765627223145",
            "extra": "mean: 1.525036886924365 usec\nrounds: 104167"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy-3.7 - sdk": [
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
        "date": 1655147278427,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 264990.5092830398,
            "unit": "iter/sec",
            "range": "stddev: 0.000044761917035001464",
            "extra": "mean: 3.7737200577696433 usec\nrounds: 188680"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 166468.0910003218,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328075020063794",
            "extra": "mean: 6.00715725152436 usec\nrounds: 131579"
          }
        ]
      }
    ]
  }
}