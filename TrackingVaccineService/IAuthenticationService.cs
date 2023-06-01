using System.Collections.Generic;
using System.ServiceModel;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IAuthenticationService" in both code and config file together.
    [ServiceContract]
    public interface IAuthenticationService
    {
        [OperationContract]
        bool Login(string username, string password);
        [OperationContract]
        bool Register(string username, string password, string NIK, string name, int age, string address);
        [OperationContract]
        User GetUser(string username);
        [OperationContract]
        List<Resident> GetResidents();
    }
}
