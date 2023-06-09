window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = {
        // Options affecting the whole page
        "publicPath": undefined,
        "polyfills": true,

        // Options affecting files only
        "autoplay": "on",
        "wmode": "window",
        "letterbox": "fullscreen",
        "warnOnUnsupportedContent": true,
        "contextMenu": "on",
        "showSwfDownload": true,
        "unmuteOverlay": "hidden",
        "maxExecutionDuration": 15,
        "logLevel": "error",
        "base": null,
        "menu": true,
        "frameRate": null,
        "quality": "high",
        "splashScreen": false,
        "preferredRenderer": null,
        "openUrlMode": "allow",
        "allowNetworking": "all",
      };

      function ruffleLoadUrl(swf) {
        if (document.getElementById("pframe")) {
          document.getElementById("pframe").remove();
        }
        if (typeof ruffle == "undefined") {
          var ruffle = window.RufflePlayer.newest();
        }
        if (typeof player == "undefined") {
          var player = ruffle.createPlayer();

          if (typeof container == "undefined") {
            var container = document.getElementById("efef");
          }
          player.id = "rframe";
          container.appendChild(player);
        }


        player.load({
          url: swf,
          parameters: "",
          allowScriptAccess: true,
        });
      }
      ruffleLoadUrl("https://cdn.jsdelivr.net/gh/CBGamesdev/chilibowlflash@9d4433f37be994bca13838c59bdb44b3f823cd6b/bloonstd.swf");
