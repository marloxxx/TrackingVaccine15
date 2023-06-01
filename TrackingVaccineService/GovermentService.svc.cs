using System.Linq;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "GovermentService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select GovermentService.svc or GovermentService.svc.cs at the Solution Explorer and start debugging.
    public class GovermentService : IGovermentService
    {
        public bool validate(string NIK)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Residents.Where(r => r.NIK == NIK).FirstOrDefault();
            if (query != null)
            {
                return true;
            }
            return false;
        }
    }
}
