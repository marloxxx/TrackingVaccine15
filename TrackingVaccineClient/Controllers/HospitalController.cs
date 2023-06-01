using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingVaccineClient.AuthenticationService;
using TrackingVaccineClient.BPOMService;
using TrackingVaccineClient.GovermentService;
using TrackingVaccineClient.ProcedurService;

namespace TrackingVaccineClient.Controllers
{
    [Authorize]
    public class HospitalController : Controller
    {
        // GET: Hospital
        public ActionResult Index()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetVaccines().Where(v => v.status == 2).ToList();
            return View(vaccines);
        }

        public ActionResult Arrived()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetVaccines().Where(v => v.status == 3).ToList();
            return View(vaccines);
        }

        [HttpPost]
        public ActionResult Arrive(string id)
        {
            BPOMServiceClient client = new BPOMServiceClient();
            if (client.Arrived(int.Parse(id)))
            {
                Session["success"] = "Berhasil diterima";
            }
            else
            {
                Session["error"] = "Gagal diterima";
            }
            return RedirectToAction("Index");
        }


        public ActionResult Use(string id)
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccine = procedurService.GetVaccine(int.Parse(id));

            AuthenticationServiceClient client = new AuthenticationServiceClient();
            var residents = client.GetResidents();
            ViewBag.residents = residents;
            return View(vaccine);
        }

        [HttpPost]
        public ActionResult Use(FormCollection formCollection)
        {
            string registered_number = formCollection["registered_number"];
            string nik = formCollection["nik"];
            if (string.IsNullOrEmpty(registered_number))
            {
                ModelState.AddModelError("registered_number", "Registered Number tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(nik))
            {
                ModelState.AddModelError("nik", "NIK tidak boleh kosong");
            }

            if (ModelState.IsValid)
            {
                BPOMServiceClient client = new BPOMServiceClient();
                try
                {
                    client.Used(registered_number, nik);
                    Session["success"] = "Berhasil digunakan";
                    return RedirectToAction("Index");
                }
                catch (Exception e)
                {
                    ModelState.AddModelError("registered_number", e.Message);
                }
            }

            AuthenticationServiceClient authenticationService = new AuthenticationServiceClient();
            var residents = authenticationService.GetResidents();
            ViewBag.residents = residents;
            return View();
        }

        public ActionResult Used()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetRegisteredVaccinesUsage();
            return View(vaccines);
        }

        public ActionResult Validate()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Validate(string nik)
        {
            GovermentServiceClient goverment = new GovermentServiceClient();
            bool isValid = goverment.validate(nik);
            var response = new
            {
                isValid = isValid,
                message = isValid ? "Penduduk Valid" : "Penduduk Invalid"
            };
            return Json(response);
        }
    }
}
