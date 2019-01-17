using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DashboardServices.Models
{
    public class GetOverdueApplicationByHouse
    {
        public string HouseName { get; set; }
        public double Total { get; set; }
        public List<GetOverdueApplicationsByInmate> getOverdueApplicationsByInmates;
        public GetOverdueApplicationByHouse()
        {
            getOverdueApplicationsByInmates = new List<GetOverdueApplicationsByInmate>();
        }
    }
}