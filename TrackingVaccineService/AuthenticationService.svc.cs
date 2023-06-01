using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AuthenticationService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AuthenticationService.svc or AuthenticationService.svc.cs at the Solution Explorer and start debugging.
    public class AuthenticationService : IAuthenticationService
    {
        public bool Login(string username, string password)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Users.Where(u => u.username == username && u.password == password).FirstOrDefault();
            if (query != null)
            {
                return true;
            }
            return false;
        }

        public bool Register(string username, string password, string NIK, string name, int age, string address)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            var query = entities.Users.Where(u => u.username == username).FirstOrDefault();
            if (query != null)
            {
                return false;
            }

            User newUser = new User();
            newUser.username = username;
            newUser.password = password;
            newUser.role = "user";
            // save
            entities.Users.Add(newUser);
            entities.SaveChanges();

            Resident resident = new Resident();
            resident.NIK = NIK;
            resident.name = name;
            resident.age = age;
            resident.address = address;
            // save
            entities.Residents.Add(resident);
            entities.SaveChanges();

            return true;
        }

        public User GetUser(string username)
        {
            var entities = new TRACKING_VAKSIN_15Entities();
            User user = entities.Users.SingleOrDefault(u => u.username == username);
            return user;
        }

        public List<Resident> GetResidents(){
            var entities = new TRACKING_VAKSIN_15Entities();
            List<Resident> query = entities.Residents.ToList();
            return query;
        }
    }
}
