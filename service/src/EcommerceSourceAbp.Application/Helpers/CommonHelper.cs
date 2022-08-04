using System.Net.Mail;

namespace EcommerceSourceAbp.Helpers
{
    public static class CommonHelper
    {
        public static bool CheckIsEmail(string email)
        {
            try
            {
                var addr = new MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}