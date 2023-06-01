using System;
using System.Web.Mvc;
using TrackingVaccineClient.BPOMService;
using TrackingVaccineClient.ProcedurService;

namespace TrackingVaccineClient.Controllers
{
    [Authorize]
    public class ProducerController : Controller
    {
        // GET: Procedur
        public ActionResult Index()
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccines = procedurService.GetVaccines();
            return View(vaccines);
        }

        // GET: Procedur/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Procedur/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Procedur/Create
        [HttpPost]
        public ActionResult Create(Vaccine vaccine)
        {
            if (string.IsNullOrEmpty(vaccine.code))
            {
                ModelState.AddModelError("code", "Code tidak boleh kosong");
            }
            if (ModelState.IsValid)
            {
                ProcedurServiceClient procedurService = new ProcedurServiceClient();
                try
                {
                    procedurService.create(vaccine);
                    Session["success"] = "Berhasil ditambahkan";
                    return RedirectToAction("Index");
                }
                catch (Exception e)
                {
                    ModelState.AddModelError("code", e.Message);
                }
            }
            return View();
        }

        // GET: Procedur/Edit/5
        public ActionResult Edit(string id)
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            var vaccine = procedurService.GetVaccine(int.Parse(id));
            if (vaccine == null)
            {
                return HttpNotFound();
            }
            return View(vaccine);
        }

        // POST: Procedur/Edit/5
        [HttpPost]
        public ActionResult Edit(Vaccine vaccine)
        {
            if (string.IsNullOrEmpty(vaccine.code))
            {
                ModelState.AddModelError("code", "Code tidak boleh kosong");
            }
            if (ModelState.IsValid)
            {
                try
                {
                    ProcedurServiceClient procedurService = new ProcedurServiceClient();
                    procedurService.update(vaccine);
                    Session["success"] = "Berhasil diupdate";
                    return RedirectToAction("Index");
                }
                catch (Exception e)
                {
                    ModelState.AddModelError("code", e.Message);
                }
            }
            return View();
        }

        public ActionResult Delete(string id)
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            if (procedurService.delete(int.Parse(id)))
            {
                Session["success"] = "Berhasil dihapus";
            }
            else
            {
                Session["error"] = "Gagal dihapus";
            }
            return RedirectToAction("Index");
        }

        public ActionResult Send(string id)
        {
            ProcedurServiceClient procedurService = new ProcedurServiceClient();
            if (procedurService.send(int.Parse(id)))
            {
                Session["success"] = "Berhasil dikirim";
            }
            else
            {
                Session["error"] = "Gagal dikirim";
            }
            return RedirectToAction("Index");
        }

        public ActionResult Verify(string id)
        {
            BPOMServiceClient client = new BPOMServiceClient();
            if (client.Verify(int.Parse(id)))
            {
                Session["success"] = "Berhasil diverifikasi";

            }
            else
            {
                Session["error"] = "Gagal diverifikasi";
            }
            return RedirectToAction("Index");

        }

        public ActionResult RemoveSession()
        {
            Session.Remove("success");
            return Content("Session removed successfully.");
        }
    }
}