using DashboardServices.Constants;
using DashboardServices.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace DashboardServices.Controllers
{
    public class THReportsController : BaseController
    {
        [HttpPost]
        public HttpResponseMessage LoadTHReports()
        {
            StringBuilder sb = new StringBuilder();
            string json = string.Empty;

            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetTableData(ProcedureConstants.INSERT_REPORT);

            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalApplicationsByUnit(InputData input)
        {
            StringBuilder sb = new StringBuilder();
            string json = string.Empty;

            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_APPLN_INMATES_SUBBYUNIT, input);

            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalApplicationsByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_TOTALAPPLICATIONS, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalApplicationsResponseByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_APPLICATIONRESPONSE, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalResponseTimeByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_RESPONSETIME, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalButterFlyResponseByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_BUTTERFLY_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalCornerstoneTransitionHomeByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_CORNERSTONETRANSITIONHOME_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalCasaWomenShelterByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_CASA_WOMENS_SHELTER_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalPhoenixRecoveryWomenByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_PHOENIXRECOVERYWOMEN_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalFreshlyRenewedWomenByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_FRESHLY_RENEWED_WOMEN_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalOMARTByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_OMART_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalQualityLivingCenterByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_QUALITY_LIVING_CENTER_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalShalomRecoveryCentersByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_SHALOM_RECOVERY_CENTER_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalSoberLivingByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_SOBER_LIVING_COUNT, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetBedsMarkedAvailabilityByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_BEDS_MARKED_AVAILABILITY, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }


        [HttpPost]
        public List<GetOverdueApplicationByHouse> GetOverdueApplicationsByHouse()
        {
            string json = string.Empty;
            List<GetOverdueApplicationByHouse> objOverdueHouse = new List<GetOverdueApplicationByHouse>();
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetTableData(ProcedureConstants.SP_HOUSE_OVERDUEAPPLICATIONS);
            if (json.Length > 2)
            {
                System.Web.Script.Serialization.JavaScriptSerializer jsSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
                 objOverdueHouse = jsSerializer.Deserialize<List<GetOverdueApplicationByHouse>>(json);
                foreach (GetOverdueApplicationByHouse objHouse in objOverdueHouse)
                {
                    List<GetOverdueApplicationsByInmate> objOverdueInmate = GetOverDueApplicationsByInmates(objHouse.HouseName);
                    foreach (GetOverdueApplicationsByInmate objInmate in objOverdueInmate)
                    {
                        objHouse.getOverdueApplicationsByInmates.Add(objInmate);
                    }
                }
            }
            return objOverdueHouse;
            //return new HttpResponseMessage()
            //{
            //    Content = new StringContent(objOverdueHouse),
            //    StatusCode = HttpStatusCode.OK
            //};

        }

        private List<GetOverdueApplicationsByInmate> GetOverDueApplicationsByInmates(string HouseName)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetTableOverDueData(ProcedureConstants.SP_INMATES_OVERDUEAPPLICATIONS, HouseName);
            System.Web.Script.Serialization.JavaScriptSerializer jsSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            List<GetOverdueApplicationsByInmate> objOverdueInmate = jsSerializer.Deserialize<List<GetOverdueApplicationsByInmate>>(json);
            return objOverdueInmate;
        }

        [HttpPost]
        public HttpResponseMessage GetTotalApplicationsByInmateUnit(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_INMATE_TOTALAPPLICATIONSOVER3MONTHS, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetTotalApplicationsOver3MonthsByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_TOTALAPPLICATIONSOVER3MONTHS, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetAverageResponseOver3MonthsByHouse(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_TOTALAPPLICATIONSAVERAGERESPONSEOVER3MONTHS, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage GetBedsMarkedAvailabilityOverMonths(InputData input)
        {
            string json = string.Empty;
            DashboardServices.MySQLConnection.MySQLConnection con = new DashboardServices.MySQLConnection.MySQLConnection();
            json = con.GetData(ProcedureConstants.SP_HOUSE_BEDS_MARKED_AVAILABILITY_OVER_MONTHS, input);
            return new HttpResponseMessage()
            {
                Content = new StringContent(json),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}