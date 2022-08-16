namespace EcommerceSourceAbp.Extensions
{
    public class ErrorResponse
    {
        public ErrorResult error { get; set; }
    }

    public class ErrorResult
    {
        public string code { get; set; }
        public string message { get; set; }
    }
}
