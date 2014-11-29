using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Script.Serialization;

namespace WebForms.Library
{
    public class DataConvert
    {
        public static string SerializeJson(object @object)
        {
            JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
            return javaScriptSerializer.Serialize(@object);
        }
    }
}
