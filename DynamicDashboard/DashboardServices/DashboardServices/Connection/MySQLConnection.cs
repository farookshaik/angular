using DashboardServices.Models;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace DashboardServices.MySQLConnection
{
    public class MySQLConnection
    {
        string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["OnlineDBConstr"].ConnectionString;
        MySqlConnection con;
        public MySQLConnection()
        {
            con = new MySqlConnection(connectionString);
            con.Open();
        }

        public string GetData(string storedProcedure, InputData input)
        {
            DataSet dataSet = new DataSet();
            DataTable dt;
            string data = string.Empty;

            using (MySqlCommand cmd = new MySqlCommand(storedProcedure, con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("@FromDate", input.fromDate.ToString("yyyy-MM-dd")));
                cmd.Parameters.Add(new MySqlParameter("@ToDate", input.toDate.ToString("yyyy-MM-dd")));
                using (MySqlDataAdapter sda = new MySqlDataAdapter(cmd))
                {
                    sda.Fill(dataSet, "Inmates");
                    dt = new DataTable();

                    sda.Fill(dt);
                    data = JsonConvert.SerializeObject(dt);

                    CloseConnection();
                }
            }
            //return new JavaScriptSerializer().Serialize(new { data });
            return data;
        }

        public string GetTableData(string storedProcedure)
        {
            DataSet dataSet = new DataSet();
            DataTable dt;
            string data = string.Empty;

            using (MySqlCommand cmd = new MySqlCommand(storedProcedure, con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                using (MySqlDataAdapter sda = new MySqlDataAdapter(cmd))
                {
                    sda.Fill(dataSet, "Tables");
                    dt = new DataTable();

                    sda.Fill(dt);
                    data = JsonConvert.SerializeObject(dt);

                    CloseConnection();
                }
            }
            //return new JavaScriptSerializer().Serialize(new { data });
            return data;
        }


        public string GetTableOverDueData(string storedProcedure, string HouseName)
        {
            DataSet dataSet = new DataSet();
            DataTable dt;
            string data = string.Empty;

            using (MySqlCommand cmd = new MySqlCommand(storedProcedure, con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("@HouseName", HouseName));
                using (MySqlDataAdapter sda = new MySqlDataAdapter(cmd))
                {
                    sda.Fill(dataSet, "InmatesOverdue");
                    dt = new DataTable();

                    sda.Fill(dt);
                    data = JsonConvert.SerializeObject(dt);

                    CloseConnection();
                }
            }
            //return new JavaScriptSerializer().Serialize(new { data });
            return data;
        }


        private static void Sort(JObject jObj)
        {
            var props = jObj.Properties().ToList();
            foreach (var prop in props)
            {
                prop.Remove();
            }

            foreach (var prop in props.OrderBy(p => p.Name))
            {
                jObj.Add(prop);
                if (prop.Value is JObject)
                    Sort((JObject)prop.Value);
            }
        }

        public void CloseConnection()
        {
            con.Close();
        }

    }
}