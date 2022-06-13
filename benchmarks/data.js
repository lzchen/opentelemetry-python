window.BENCHMARK_DATA = {
  "lastUpdate": 1655151029953,
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655150822354,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31347.066130090596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012999396022426177",
            "extra": "mean: 31.900912061434756 usec\nrounds: 6641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21913.410162021068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013042676520346347",
            "extra": "mean: 45.634157011907554 usec\nrounds: 8286"
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655150824890,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 129496.4416028043,
            "unit": "iter/sec",
            "range": "stddev: 0.000005510881858127269",
            "extra": "mean: 7.722219912939635 usec\nrounds: 15156"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 246879.63652981672,
            "unit": "iter/sec",
            "range": "stddev: 3.2681466906495503e-7",
            "extra": "mean: 4.050556838369396 usec\nrounds: 70938"
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655150920413,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 68661.50406374755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015811406720322058",
            "extra": "mean: 14.564201784329804 usec\nrounds: 9416"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 129600.91269833647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012514024770503226",
            "extra": "mean: 7.715995043396293 usec\nrounds: 56491"
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
        "date": 1655147472301,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21432.5346313202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012144681500655062",
            "extra": "mean: 46.65803728779054 usec\nrounds: 2360"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14197.549557636361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014623798718074108",
            "extra": "mean: 70.43468986957225 usec\nrounds: 6120"
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655150942079,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24227.520144447873,
            "unit": "iter/sec",
            "range": "stddev: 0.000004001071356529974",
            "extra": "mean: 41.275375855137455 usec\nrounds: 2046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16523.263020809038,
            "unit": "iter/sec",
            "range": "stddev: 0.000001977332825981273",
            "extra": "mean: 60.520733631161214 usec\nrounds: 5147"
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
        "date": 1655147511621,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3141.7221864605835,
            "unit": "iter/sec",
            "range": "stddev: 0.00000786409209826664",
            "extra": "mean: 318.2967623011202 usec\nrounds: 1321"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5784.487277450869,
            "unit": "iter/sec",
            "range": "stddev: 0.0007931500455673682",
            "extra": "mean: 172.87616897321345 usec\nrounds: 7226"
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655150956014,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3464.48982780148,
            "unit": "iter/sec",
            "range": "stddev: 0.000007150743608071019",
            "extra": "mean: 288.64278716459296 usec\nrounds: 1527"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 6128.415262204262,
            "unit": "iter/sec",
            "range": "stddev: 0.000727747908199547",
            "extra": "mean: 163.1743211278932 usec\nrounds: 7128"
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
        "date": 1655147570727,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22940.210124119738,
            "unit": "iter/sec",
            "range": "stddev: 0.000001392209028650409",
            "extra": "mean: 43.5915797889132 usec\nrounds: 6254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16691.701322802528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016259993425049927",
            "extra": "mean: 59.910010409418256 usec\nrounds: 7205"
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
        "date": 1655147554939,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96672.60851598514,
            "unit": "iter/sec",
            "range": "stddev: 4.573282363576929e-7",
            "extra": "mean: 10.34419175556483 usec\nrounds: 12469"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 195448.06399322225,
            "unit": "iter/sec",
            "range": "stddev: 2.9188630528963687e-7",
            "extra": "mean: 5.1164487361444415 usec\nrounds: 66226"
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
          "distinct": false,
          "id": "9384cb17ec293a7c0fc24581a9217544592f9b60",
          "message": "Merge branch 'main' into release-workflow",
          "timestamp": "2022-06-13T19:44:20+05:30",
          "tree_id": "cb44fee190fcdfad71f9e748279bed75f0af3bd8",
          "url": "https://github.com/lzchen/opentelemetry-python/commit/9384cb17ec293a7c0fc24581a9217544592f9b60"
        },
        "date": 1655151029325,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96495.77760057335,
            "unit": "iter/sec",
            "range": "stddev: 4.5210843109602777e-7",
            "extra": "mean: 10.363147744550206 usec\nrounds: 14410"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 191305.09975990787,
            "unit": "iter/sec",
            "range": "stddev: 3.188251766958433e-7",
            "extra": "mean: 5.227252181227904 usec\nrounds: 65790"
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
        "date": 1655147551556,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3795.7697285695112,
            "unit": "iter/sec",
            "range": "stddev: 0.000006945147560842592",
            "extra": "mean: 263.45117631170524 usec\nrounds: 1486"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 8028.63849094493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921014759175469",
            "extra": "mean: 124.5541197461869 usec\nrounds: 8827"
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
        "date": 1655147650985,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 113912.45123961325,
            "unit": "iter/sec",
            "range": "stddev: 4.1830792847350015e-7",
            "extra": "mean: 8.778671594876963 usec\nrounds: 14948"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 247868.04020894956,
            "unit": "iter/sec",
            "range": "stddev: 2.8148233259021986e-7",
            "extra": "mean: 4.034404754872846 usec\nrounds: 70917"
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
        "date": 1655147674034,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29169.08600144497,
            "unit": "iter/sec",
            "range": "stddev: 0.000001149135064573417",
            "extra": "mean: 34.28287056887769 usec\nrounds: 5501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21120.708405155612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013284922035308792",
            "extra": "mean: 47.34689674309872 usec\nrounds: 6663"
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
        "date": 1655147769037,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28090.2986797739,
            "unit": "iter/sec",
            "range": "stddev: 0.000001062475961559443",
            "extra": "mean: 35.59947907282448 usec\nrounds: 4874"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20458.330939189687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013495926910294507",
            "extra": "mean: 48.879842787390544 usec\nrounds: 6558"
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
        "date": 1655147759979,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 91902.14255056754,
            "unit": "iter/sec",
            "range": "stddev: 0.000015904759630573354",
            "extra": "mean: 10.881139136117177 usec\nrounds: 10788"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 168136.37355529782,
            "unit": "iter/sec",
            "range": "stddev: 0.00001231417357635839",
            "extra": "mean: 5.947553041942546 usec\nrounds: 52911"
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
        "date": 1655147775286,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3468.169716715658,
            "unit": "iter/sec",
            "range": "stddev: 0.000003706165070537404",
            "extra": "mean: 288.3365237809053 usec\nrounds: 1682"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5961.992664265372,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755210293180963",
            "extra": "mean: 167.72915639325407 usec\nrounds: 6554"
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
        "date": 1655147926259,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3988.6543338029187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004064185691305031",
            "extra": "mean: 250.7111211731817 usec\nrounds: 1535"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 7906.283033177655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005932076021454614",
            "extra": "mean: 126.48168498441483 usec\nrounds: 7752"
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
        "date": 1655147832742,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3685.5261465948083,
            "unit": "iter/sec",
            "range": "stddev: 0.000006681588766125564",
            "extra": "mean: 271.3316797179519 usec\nrounds: 1558"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 7684.181345311988,
            "unit": "iter/sec",
            "range": "stddev: 0.0006522643430803399",
            "extra": "mean: 130.13748050208187 usec\nrounds: 9001"
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
        "date": 1655147883651,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 618854.0019324494,
            "unit": "iter/sec",
            "range": "stddev: 2.187476602841754e-7",
            "extra": "mean: 1.615890011016154 usec\nrounds: 68966"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 1200740.2113939223,
            "unit": "iter/sec",
            "range": "stddev: 0.000001614721520294594",
            "extra": "mean: 832.8196145267187 nsec\nrounds: 128206"
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
        "date": 1655147947814,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 211647.80074795967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005632853154562034",
            "extra": "mean: 4.724830574501683 usec\nrounds: 144928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 114277.96132845685,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786743278207143",
            "extra": "mean: 8.75059362606065 usec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}