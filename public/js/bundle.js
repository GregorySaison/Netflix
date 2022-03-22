(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        function searchTitle() {
          const searchBar = document.getElementById("search");
          const titleList = document.querySelectorAll(".main__card");

          searchBar.addEventListener("keyup", (e) => {
            const filter = e.target.value.toLowerCase();

            titleList.forEach((title) => {
              if (title.textContent.includes(filter)) {
                title.style.display = "block";
              } else {
                title.style.display = "none";
              }
            });
          });
        }

        function filterTitle() {
          const buttons = document.querySelectorAll(".header__form-btn");
          const titleList = document.querySelectorAll(".main__card");

          buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
              e.preventDefault();
              const filter = e.target.dataset.filter;

              titleList.forEach((title) => {
                if (filter === "all") {
                  title.style.display = "block";
                } else {
                  if (title.classList.contains(filter)) {
                    title.style.display = "block";
                  } else {
                    title.style.display = "none";
                  }
                }
              });
            });
          });
        }

        searchTitle();
        filterTitle();
      },
      {},
    ],
  },
  {},
  [1]
);
