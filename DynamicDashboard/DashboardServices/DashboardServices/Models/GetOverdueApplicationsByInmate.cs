using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DashboardServices.Models
{
    public class GetOverdueApplicationsByInmate
    {
        public string InmateName { get; set; }
        public double PID { get; set; }
    }
}