using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace EcommerceSourceAbp.Extensions
{
    public static class HttpClientExtensions
    {
        public static async Task<T> PostAsync<T>(this HttpClient httpClient, string url, object body) where T : class
        {
            var request = JsonConvert.SerializeObject(body, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            var requestUrl = url;

            var httpResponse = await httpClient.PostAsync(requestUrl, new StringContent(request, Encoding.UTF8, "application/json"));


            if (!httpResponse.IsSuccessStatusCode)
            {
                var error = await httpResponse.Content.ReadAsStringAsync();
                if (error.IsNullOrWhiteSpace()) throw new Exception("Request fail");

                var errorObject = JsonConvert.DeserializeObject<ErrorResponse>(error);

                throw new Exception(errorObject?.error?.message ?? "Request fail");
            }

            var response = await httpResponse.Content.ReadAsStringAsync();

            if (response.IsNullOrWhiteSpace()) return null;

            return JsonConvert.DeserializeObject<T>(response);
        }

        public static async Task<T> GetAsync<T>(this HttpClient httpClient, string url) where T : class
        {
            var requestUrl = url;

            var httpResponse = await httpClient.GetAsync(requestUrl);

            if (!httpResponse.IsSuccessStatusCode)
            {
                var error = await httpResponse.Content.ReadAsStringAsync();
                if (error.IsNullOrWhiteSpace()) throw new Exception("Request fail");

                var errorObject = JsonConvert.DeserializeObject<ErrorResponse>(error);

                throw new Exception(errorObject?.error?.message ?? "Request fail");
            }

            var response = await httpResponse.Content.ReadAsStringAsync();

            if (response.IsNullOrWhiteSpace()) return null;

            return JsonConvert.DeserializeObject<T>(response);
        }

        public static async Task<T> DeleteAsync<T>(this HttpClient httpClient, string url) where T : class
        {
            var requestUrl = url;

            var httpResponse = await httpClient.DeleteAsync(requestUrl);

            if (!httpResponse.IsSuccessStatusCode)
            {
                var error = await httpResponse.Content.ReadAsStringAsync();
                if (error.IsNullOrWhiteSpace()) throw new Exception("Request fail");

                var errorObject = JsonConvert.DeserializeObject<ErrorResponse>(error);

                throw new Exception(errorObject?.error?.message ?? "Request fail");
            }

            var response = await httpResponse.Content.ReadAsStringAsync();

            if (response.IsNullOrWhiteSpace()) return null;

            return JsonConvert.DeserializeObject<T>(response);
        }

        public static async Task<T> PutAsync<T>(this HttpClient httpClient, string url, object body) where T : class
        {
            var requestUrl = url;

            var request = JsonConvert.SerializeObject(body, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            var httpResponse = await httpClient.PostAsync(requestUrl, new StringContent(request, Encoding.UTF8, "application/json"));

            if (!httpResponse.IsSuccessStatusCode)
            {
                var error = await httpResponse.Content.ReadAsStringAsync();
                if (error.IsNullOrWhiteSpace()) throw new Exception("Request fail");

                var errorObject = JsonConvert.DeserializeObject<ErrorResponse>(error);

                throw new Exception(errorObject?.error?.message ?? "Request fail");
            }

            var response = await httpResponse.Content.ReadAsStringAsync();

            if (response.IsNullOrWhiteSpace()) return null;

            return JsonConvert.DeserializeObject<T>(response);
        }
    }
}
