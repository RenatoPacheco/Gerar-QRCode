using MessagingToolkit.QRCode.Codec;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;

namespace WebForms.Ashx
{
    /// <summary>
    /// Summary description for GerarQRCode
    /// </summary>
    public class GerarQRCode : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string valor = "";
            double escala = 1;
            string modo = "BYTE";
            int versao = 0;
            string correcao = "M";

            if (!double.TryParse(context.Request["escala"], out escala))
                escala = 1;

            if (escala > 10)
                escala = 10;

            if (!int.TryParse(context.Request["versao"], out versao) || versao < 2 || versao > 40)
                versao = 0;

            if (context.Request["valor"] != null)
                valor = context.Request["valor"].Trim();

            if (context.Request["modo"] != null)
                modo = context.Request["modo"].Trim();

            if (context.Request["correcao"] != null)
                correcao = context.Request["correcao"].Trim();

            MemoryStream ms = new MemoryStream();
            QRCodeEncoder encode = new QRCodeEncoder();

            encode.QRCodeScale = (int)(encode.QRCodeScale * escala);

            if (modo == "ALPHA_NUMERIC")
                encode.QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.ALPHA_NUMERIC;
            else if (modo == "NUMERIC")
                encode.QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.NUMERIC;
            else if (modo == "BYTE")
                encode.QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.BYTE;

            encode.QRCodeVersion = versao;

            if (correcao == "L")
                encode.QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.L;
            else if (correcao == "M")
                encode.QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.M;
            else if (correcao == "Q")
                encode.QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.Q;
            else if (correcao == "H")
                encode.QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.H;

            Bitmap arquivo = encode.Encode(valor);
            Image imagem = (Image)arquivo;
            imagem.Save(ms, ImageFormat.Jpeg);

            context.Response.ContentType = "image/jpeg";
            if (context.Request["download"] == "true")
            {
                context.Response.AppendHeader("Content-Disposition", "attachment; filename=QRCode.jpg");
            }
            ms.WriteTo(context.Response.OutputStream);
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