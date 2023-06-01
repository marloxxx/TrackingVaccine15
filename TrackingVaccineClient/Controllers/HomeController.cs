using System;
using System.Web.Mvc;
using System.Web.Security;
using TrackingVaccineClient.AuthenticationService;

namespace TrackingVaccineClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            Session.Abandon();
            return View();
        }

        [HttpPost]
        public ActionResult Login(User user)
        {
            if (string.IsNullOrEmpty(user.username))
            {
                ModelState.AddModelError("username", "Username tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(user.password))
            {
                ModelState.AddModelError("password", "Password tidak boleh kosong");
            }
            if (!ModelState.IsValid)
            {
                return View();
            }
            AuthenticationServiceClient client = new AuthenticationService.AuthenticationServiceClient();
            bool result = client.Login(user.username, user.password);
            if (result)
            {
                User newUser = client.GetUser(user.username);
                FormsAuthentication.SetAuthCookie(newUser.username, false);
                // set session
                Session["username"] = newUser.username;
                Session["role"] = newUser.role;
                Session["success"] = "Login berhasil";
                if (newUser.role == "produsen")
                {
                    return RedirectToAction("Index", "Producer");
                }
                if (newUser.role == "bpom")
                {
                    return RedirectToAction("Index", "BPOM");
                }
                if (newUser.role == "rumahsakit")
                {
                    return RedirectToAction("Index", "Hospital");
                }
                if (newUser.role == "pemerintah")
                {
                    return RedirectToAction("Index", "Government");
                }
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ModelState.AddModelError("login", "Username atau password salah");
                return View();
            }
        }

        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(FormCollection formCollection)
        {
            string username = formCollection["username"];
            string password = formCollection["password"];
            string NIK = formCollection["NIK"];
            string name = formCollection["name"];
            string age = formCollection["age"];
            string address = formCollection["address"];
            if (string.IsNullOrEmpty(username))
            {
                ModelState.AddModelError("username", "Username tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(password))
            {
                ModelState.AddModelError("password", "Password tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(NIK))
            {
                ModelState.AddModelError("NIK", "NIK tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(name))
            {
                ModelState.AddModelError("name", "Nama tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(age))
            {
                ModelState.AddModelError("age", "Umur tidak boleh kosong");
            }
            if (string.IsNullOrEmpty(address))
            {
                ModelState.AddModelError("address", "Alamat tidak boleh kosong");
            }

            // Contoh pengembalian tampilan jika validasi tidak berhasil
            if (!ModelState.IsValid)
            {
                return View();
            }

            AuthenticationServiceClient client = new AuthenticationServiceClient();
            try
            {
                client.Register(username, password, NIK, name, int.Parse(age), address);
                Session["success"] = "Registrasi berhasil";
                return RedirectToAction("Login", "Home");
            }
            catch (Exception)
            {
                return View();
            }

        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            Session.Clear();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult Vaccine()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult RemoveSession()
        {
            Session.Remove("success");
            return Content("Session removed successfully.");
        }
    }
}