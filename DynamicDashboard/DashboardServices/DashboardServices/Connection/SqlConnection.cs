using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace DashboardServices.Connection
{
    public class SQLConnection
    {
        string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["OnlineSqlDBConstr"].ConnectionString;
        SqlConnection con;
        public SQLConnection()
        {
            con = new SqlConnection(connectionString);
            con.Open();
        }

        public string GetData(string storedProcedure)
        {
            DataSet dataSet = new DataSet();
            DataTable dt;
            string JSONString = string.Empty;

            using (SqlCommand cmd = new SqlCommand(storedProcedure, con))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                {
                    sda.Fill(dataSet, "Demographics");
                    dt = new DataTable();

                    sda.Fill(dt);
                    JSONString = JsonConvert.SerializeObject(dt);

                    CloseConnection();
                }
            }
            return JSONString;
        }

        public void CloseConnection()
        {
            con.Close();
        }
    }
}