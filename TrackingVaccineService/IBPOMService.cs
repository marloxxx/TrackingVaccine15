using System.ServiceModel;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IBPOMService" in both code and config file together.
    [ServiceContract]
    public interface IBPOMService
    {
        [OperationContract]
        bool Verify(int id);
        [OperationContract]
        bool Arrived(int id);
        [OperationContract]
        bool Used(string code, string NIK);
    }
}
