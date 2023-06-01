using System.ServiceModel;

namespace TrackingVaccineService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IGovermentService" in both code and config file together.
    [ServiceContract]
    public interface IGovermentService
    {
        [OperationContract]
        bool validate(string NIK);
    }
}
