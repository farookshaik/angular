using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace DashboardServices.Filters
{
    public class InsertSummaryFilter : ActionFilterAttribute
    {
        private static ConcurrentDictionary<string, string> InputDictionary = new ConcurrentDictionary<string, string>();
        private ConcurrentDictionary<string, string> CaseCache = new ConcurrentDictionary<string, string>();
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
        }

        public async override void OnActionExecuting(HttpActionContext actionContext)
        {
           

            try
            {
                var GetInsertSummaryCasesApi = "GetInsertSummaryCases.api";
                var UniqueId = string.Empty;
                
                if (!actionContext.ActionArguments.ContainsKey("ServiceinputData") || (actionContext.ActionArguments["ServiceinputData"] as JObject)["QUERY"] == null)
                    throw new Exception();


                var Query = (actionContext.ActionArguments["ServiceinputData"] as JObject)["QUERY"].ToString();
                if (!string.IsNullOrEmpty(Query))
                {
                    var sanitizedQuery = Query.Replace("\r\n", string.Empty).Trim();

                    if (CaseCache.ContainsKey(sanitizedQuery))
                    {
                        UniqueId = CaseCache[sanitizedQuery];
                    }
                    else
                    {
                        UniqueId = await GetUniqueCases(Query, GetInsertSummaryCasesApi);
                         CaseCache[sanitizedQuery] = UniqueId;
                    }
                }

                JObject inputJson = (actionContext.ActionArguments["ServiceinputData"] as JObject);
                inputJson.Add(new JProperty("UniqudID", UniqueId));

                base.OnActionExecuting(actionContext);
            }
            catch (Exception exception)
            {
                //log error
            }
            finally
            {
               
            }
        }

        private static Dictionary<string, string> getFilterData(string serviceinputData)
        {
            if (string.IsNullOrEmpty(serviceinputData)) return null;
            var list = JsonConvert.DeserializeObject<IEnumerable<KeyValuePair<string, string>>>(serviceinputData);
            return list.ToDictionary(x => x.Key, x => x.Value);
        }

        private async Task<string> GetUniqueCases(string inputData, string Api)
        {
            var result = string.Empty;
            string tmcApiUrl = "http://192.168.0.161/TrackMyCaseForBonita/api/HomeApi/";
            HttpClient webClient = new HttpClient();
            HttpContent content = new StringContent(inputData, System.Text.Encoding.UTF8);
            content.Headers.Remove("Content-Type");
            content.Headers.Add("Content-Type", "application/json");
            HttpResponseMessage response = await webClient.PostAsync(tmcApiUrl + Api, content);
            if (response.IsSuccessStatusCode)
            {
                result = response.Content.ReadAsStringAsync().Result;
            }
            return result;
        }
    }
}