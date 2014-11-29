using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace WebForms.Library
{
    public static class Checksum
    {
        public static string Get(string name)
        {
            string resultado = string.Empty;
            try
            {
                using (var stream = System.IO.File.OpenRead(name))
                {
                    resultado = Checksum.Get(stream);
                }
            }
            catch
            {
                resultado = string.Empty;
            }
            return resultado;
        }
        public static string Get(Stream file)
        {
            string resultado = string.Empty;

            try
            {
                using (var md5 = MD5.Create())
                {
                    resultado = BitConverter.ToString(md5.ComputeHash(file)).Replace("-", String.Empty);
                }
            }
            catch
            {
                resultado = string.Empty;
            }

            return resultado;
        }
    }
}
