let ids = [];

const demoP = document.getElementById("ytembed");
$.get("yt.txt", (data) => {
    const ids = data.split("\n");
    ids.reverse();
    $.each(ids, (_index, item) => {
      const itemid = item.toString().split("=");
      console.log(itemid[1]);
      $("#ytembed").append(`<div class="youtube" data-embed="${itemid[1]}"></div> <br /><br />`);
    });
  });

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

setTimeout(() => {
    (() => {
      const youtube = document.querySelectorAll(".youtube");

      for (let i = 0; i < youtube.length; i++) {
        const source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";

        const image = new Image();
        image.src = source;
        image.addEventListener("load", (() => {
          youtube[i].appendChild(image);
        })(i));

        youtube[i].addEventListener("click", () => {
          const iframe = document.createElement("iframe");

          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

          this.innerHTML = "";
          this.appendChild(iframe);
        });
      }
    })();
  }, 2000);
