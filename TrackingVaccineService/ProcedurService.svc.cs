using System.Collections.Generic;
using System.Linq;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "ProcedurService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select ProcedurService.svc or ProcedurService.svc.cs at the Solution Explorer and start debugging.
    public class ProcedurService : IProcedurService
    {

        public List<Vaccine> GetVaccines()
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            List<Vaccine> query = entities.Vaccines.ToList();

            return query;
        }

        public Vaccine GetVaccine(int id)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Vaccines.Where(v => v.id == id).FirstOrDefault();
            return query;
        }

        public List<Vaccine> GetRegisteredVaccines()
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            List<Vaccine> query = entities.Vaccines.Where(v => v.registered_number != null).ToList();
            return query;
        }

        public bool ValidateRegisteredVaccine(string registered_number)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Vaccines.Where(v => v.registered_number == registered_number).FirstOrDefault();
            if (query != null)
            {
                return true;
            }
            return false;
        }

        public bool create(Vaccine vaccine)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            entities.Vaccines.Add(vaccine);
            entities.SaveChanges();
            return true;
        }

        public bool delete(int id)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Vaccines.Where(v => v.id == id).FirstOrDefault();
            if (query != null)
            {
                entities.Vaccines.Remove(query);
                entities.SaveChanges();
                return true;
            }
            return false;
        }

        public bool update(Vaccine vaccine)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Vaccines.Where(v => v.id == vaccine.id).FirstOrDefault();
            if (query != null)
            {
                query.code = vaccine.code;
                entities.SaveChanges();
                return true;
            }
            return false;
        }

        public bool send(int id)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Vaccines.Where(v => v.id == id).FirstOrDefault();
            if (query == null)
            {
                return false;
            }
            query.status = 2;
            entities.SaveChanges(); 
            return true;
        }

        public List<VaccineUsage> GetRegisteredVaccinesUsage()
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            List<VaccineUsage> query = entities.VaccineUsages.ToList();

            return query;
        }
    }
}
