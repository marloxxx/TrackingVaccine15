using System.Linq;
using System.Web.Mvc;
using TrackingVaccineClient.ProcedurService;

namespace TrackingVaccineClient.Controllers
{
    public class BPOMController : Controller
    {
        // GET: BPOM
        [Authorize]
        public ActionResult Index()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetRegisteredVaccines();
            return View(vaccines);
        }
        public ActionResult Vaccine()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetRegisteredVaccines();
            return View(vaccines);
        }


        public ActionResult Validate()
        {
            return View();

        }
        [HttpPost]
        public ActionResult Validate(FormCollection formCollection)
        {
            string registered_number = formCollection["registered_number"];
            if (string.IsNullOrEmpty(registered_number))
            {
                ModelState.AddModelError("registered_number", "Registered Number tidak boleh kosong");
            }
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            bool isValid = procedurService.ValidateRegisteredVaccine(registered_number);
            var response = new
            {
                isValid = isValid,
                message = isValid ? "Vaccine Valid" : "Vaccine Invalid"
            };
            return Json(response);
        }
    }
}