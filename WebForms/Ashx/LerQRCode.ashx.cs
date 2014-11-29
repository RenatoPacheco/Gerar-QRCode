using MessagingToolkit.QRCode.Codec;
using MessagingToolkit.QRCode.Codec.Data;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Web;
using WebForms.Library;

namespace WebForms.Ashx
{
    /// <summary>
    /// Summary description for LerQRCode
    /// </summary>
    public class LerQRCode : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpPostedFile arquivo;
            string resultado = "";
            string checksum;
            Bitmap bmp;
            QRCodeDecoder decoder = new QRCodeDecoder();
            var mensagem = new { files = new List<object>() };

            try
            {
                if (context.Request.Files.Count > 0)
                {
                    arquivo = context.Request.Files[0];
                    checksum = Checksum.Get(arquivo.InputStream);
                    if (string.IsNullOrEmpty(checksum))
                    {
                        throw new Exception("O arquivo enviado está corrompido");
                    }
                    bmp = new Bitmap(arquivo.InputStream);
                    resultado = decoder.Decode(new QRCodeBitmapImage(bmp));

                    mensagem.files.Add(new
                    {
                        @tipo = "sucesso",
                        @mensagem = resultado,
                        @nome = arquivo.FileName,
                        @contentType = arquivo.ContentType,
                        @peso = arquivo.ContentLength,
                        @width = bmp.Width,
                        @height = bmp.Height,
                        @checksun = checksum
                    });
                }
                else
                {
                    mensagem.files.Add(new
                    {
                        @tipo = "erro",
                        @mensagem = "Nenhum arquivo foi enviado"
                    });
                }
            }
            catch (Exception ex)
            {
                mensagem.files.Add(new
                {
                    @tipo = "erro",
                    @mensagem = ex.Message.ToString()
                });
            }

            context.Response.ContentType = "application/json";
            context.Response.ContentEncoding = Encoding.UTF8;
            context.Response.Write(DataConvert.SerializeJson(mensagem));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}