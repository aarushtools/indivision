// CONFIG START

// SERVER ID

var serverID = 1;

//CONFIG END

async function execute1() {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

window.onload = function() { 
  document.getElementById("serverNumber").textContent="server number: " + serverID;
  document.getElementById("ultravioletRef").setAttribute("href", "https://ultraviolet-"+serverID+".thisis0thisis.repl.co/");
  document.getElementById("womginxRef").setAttribute("href", "https://womginx-"+serverID+".thisis0thisis.repl.co/");
};

execute1();
