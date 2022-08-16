using System;
using System.Text;
using System.Text.RegularExpressions;

namespace EcommerceSourceAbp.Extensions
{
    public static class CommonExtensions
    {
        public static string FirstCharToLowerCase(this string str)
        {
            if (string.IsNullOrEmpty(str) || char.IsLower(str[0]))
                return str;

            return char.ToLower(str[0]) + str.Substring(1);
        }

        public static string ToHex(this byte[] bytes, bool upperCase)
        {
            var result = new StringBuilder(bytes.Length * 2);
            foreach (var b in bytes)
            {
                result.Append(b.ToString(upperCase ? "X2" : "x2"));
            }

            return result.ToString();
        }

        public static string ConvertToUnSign(this string s)
        {
            var regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
            var temp = s.Normalize(NormalizationForm.FormD);
            return regex.Replace(temp, string.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');
        }

        public static string RemoveSpecialCharacters(this string s)
        {
            if (s.IsNullOrWhiteSpace()) return s;

            var reg = new Regex("[*'\",_&#^@]");

            return Regex.Replace(s, @"[^0-9a-zA-Z ]+", "");
        }
    }
}
