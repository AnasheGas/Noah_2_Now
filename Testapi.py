from serpapi import GoogleSearch

from serpapi import GoogleSearch

params = {
  "engine": "google_maps",
  "q": "Food Banks",
  "ll": "@40.7455096,-74.0083012,14z",
  "api_key": "4e7748e4d18bc02d5284bafc4bc356abb108fa93a778ef6db0a8ba1e59a49d2a"
}

search = GoogleSearch(params)
results = search.get_dict()
local_results = results["local_results"]

for my_result in local_results:
  print(my_result["address"])

