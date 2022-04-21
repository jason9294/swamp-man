<!DOCTYPE html>
<html lang="en">
 <head>
  <title>
   Creation Lab - kp用
  </title>
  <meta charset="utf-8"/>
  <meta content="width=device-width" name="viewport"/>
  <style>
   @font-face {
            font-family: Whitney;
            src: url(https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-300.woff);
            font-weight: 300;
        }

        @font-face {
            font-family: Whitney;
            src: url(https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-400.woff);
            font-weight: 400;
        }

        @font-face {
            font-family: Whitney;
            src: url(https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-500.woff);
            font-weight: 500;
        }

        @font-face {
            font-family: Whitney;
            src: url(https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-600.woff);
            font-weight: 600;
        }

        @font-face {
            font-family: Whitney;
            src: url(https://cdn.jsdelivr.net/gh/Tyrrrz/DiscordFonts@master/whitney-700.woff);
            font-weight: 700;
        }

        body {
            background-color: #36393e;
            color: #dcddde;
            font-family: "Whitney", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 17px;
            font-weight: 400;
        }

        a {
            color: #00aff4;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        img {
            object-fit: contain;
        }

        .markdown {
            max-width: 100%;
            line-height: 1.3;
            overflow-wrap: break-word;
        }

        .preserve-whitespace {
            white-space: pre-wrap;
        }

        .spoiler-text {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
        }

        .spoiler-text--hidden {
            cursor: pointer;
            background-color: #202225;
            color: rgba(0, 0, 0, 0);
        }

        .spoiler-text--hidden:hover {
            background-color: rgba(32, 34, 37, 0.8);
        }

        .spoiler-text--hidden::selection {
            color: rgba(0, 0, 0, 0);
        }

        .quote {
            display: flex;
            margin: 0.05em 0;
        }

        .quote-border {
            margin-right: 0.5em;
            border: 2px solid #4f545c;
            border-radius: 3px;
        }

        .pre {
            background-color: #2f3136;
            font-family: "Consolas", "Courier New", Courier, monospace;
        }

        .pre--multiline {
            margin-top: 0.25em;
            padding: 0.5em;
            border: 2px solid #282b30;
            border-radius: 5px;
            color: #b9bbbe;
        }

        .pre--multiline.hljs {
            background-color: #2f3136;
            color: #b9bbbe;
        }

        .pre--inline {
            padding: 2px;
            border-radius: 3px;
            font-size: 0.85em;
        }

        .mention {
            border-radius: 3px;
            padding: 0 2px;
            color: #dee0fc;
            background-color: rgba(88, 101, 242, .3);
            font-weight: 500;
        }

        .mention:hover {
            background-color: #5865f2;
            color: #ffffff
        }

        .timestamp {
            border-radius: 3px;
            padding: 0 2px;
            background-color: rgba(255, 255, 255, 0.06);
        }

        .emoji {
            width: 1.325em;
            height: 1.325em;
            margin: 0 0.06em;
            vertical-align: -0.4em;
        }

        .emoji--small {
            width: 1em;
            height: 1em;
        }

        .emoji--large {
            width: 2.8em;
            height: 2.8em;
        }

        .preamble {
            display: grid;
            margin: 0 0.3em 0.6em 0.3em;
            max-width: 100%;
            grid-template-columns: auto 1fr;
        }

        .preamble__guild-icon-container {
            grid-column: 1;
        }

        .preamble__guild-icon {
            max-width: 88px;
            max-height: 88px;
        }

        .preamble__entries-container {
            grid-column: 2;
            margin-left: 0.6em;
        }

        .preamble__entry {
            font-size: 1.4em;
            color: #ffffff;
        }

        .preamble__entry--small {
            font-size: 1em;
        }

        .chatlog {
            max-width: 100%;
        }

        .chatlog__message-group {
            display: grid;
            margin: 0 0.6em;
            padding: 0.9em 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            grid-template-columns: auto 1fr;
        }

        .chatlog__reference-symbol {
            grid-column: 1;
            margin: 8px 4px 4px 18px;
            border-left: 2px solid #4f545c;
            border-top: 2px solid #4f545c;
            border-radius: 8px 0 0 0;
        }

        .chatlog__reference {
            display: flex;
            grid-column: 2;
            margin-bottom: 0.25em;
            font-size: 0.875em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            align-items: center;
            color: #b5b6b8;
        }

        .chatlog__reference-avatar {
            border-radius: 50%;
            width: 16px;
            height: 16px;
            margin-right: 0.25em;
        }

        .chatlog__reference-name {
            margin-right: 0.3em;
            font-weight: 600;
        }

        .chatlog__reference-content {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chatlog__reference-content a:hover {
            text-decoration: none;
        }

        .chatlog__reference-link {
            cursor: pointer;
            color: #b5b6b8;
        }

        .chatlog__reference-link * {
            display: inline;
            pointer-events: none;
        }

        .chatlog__reference-link:hover {
            color: #ffffff;
        }

        .chatlog__reference-link:hover *:not(.spoiler-text) {
            color: #ffffff;
        }

        .chatlog__reference-edited-timestamp {
            margin-left: 0.25em;
            font-size: 0.8em;
            unicode-bidi: bidi-override;
            color: rgba(255, 255, 255, 0.2);
        }

        .chatlog__author-avatar-container {
            grid-column: 1;
            width: 40px;
            height: 40px;
            margin-right: 16px;
        }

        .chatlog__author-avatar {
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }

        .chatlog__messages {
            grid-column: 2;
            min-width: 50%;
            direction: ltr;
        }

        .chatlog__author-name {
            font-weight: 500;
            color: #ffffff;
        }

        .chatlog__timestamp {
            margin-left: 0.3em;
            font-size: 0.75em;
            direction: ltr;
            unicode-bidi: bidi-override;
            color: rgba(255, 255, 255, 0.2);
        }

        .chatlog__message {
            padding: 0.1em 0.3em;
            margin: 0 -0.3em;
            background-color: transparent;
            transition: background-color 1s ease;
        }

        .chatlog__message--highlighted {
            background-color: rgba(114, 137, 218, 0.2);
        }

        .chatlog__message--pinned {
            background-color: rgba(249, 168, 37, 0.05);
        }

        .chatlog__content {
            font-size: 0.95em;
            word-wrap: break-word;
        }

        .chatlog__edited-timestamp {
            margin-left: 0.15em;
            font-size: 0.8em;
        }

        .chatlog__attachment {
            display: inline-block;
            position: relative;
            margin-top: 0.3em;
            border-radius: 3px;
            overflow: hidden;
        }

        .chatlog__attachment--hidden {
            cursor: pointer;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
        }

        .chatlog__attachment--hidden * {
            pointer-events: none;
        }

        .chatlog__attachment-spoiler-caption {
            display: none;
            z-index: 999;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 0.4em 0.8em;
            background-color: rgba(0, 0, 0, 0.9);
            border-radius: 20px;
            color: #dcddde;
            font-size: 0.9em;
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        .chatlog__attachment--hidden .chatlog__attachment-spoiler-caption {
            display: block;
        }

        .chatlog__attachment--hidden:hover .chatlog__attachment-spoiler-caption {
            color: #fff;
        }

        .chatlog__attachment-media {
            vertical-align: top;
            max-width: 45vw;
            max-height: 500px;
            border-radius: 3px;
        }

        .chatlog__attachment--hidden .chatlog__attachment-media {
            filter: blur(44px);
        }

        .chatlog__attachment-generic {
            width: 100%;
            max-width: 520px;
            height: 40px;
            padding: 10px;
            background-color: #2f3136;
            border: 1px solid #292b2f;
            border-radius: 3px;
            overflow: hidden;
        }

        .chatlog__attachment--hidden .chatlog__attachment-generic {
            filter: blur(44px);
        }

        .chatlog__attachment-generic-icon {
            float: left;
            width: 30px;
            height: 100%;
            margin-right: 10px;
        }

        .chatlog__attachment-generic-size {
            color: #72767d;
            font-size: 12px;
        }

        .chatlog__attachment-generic-name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .chatlog__edited-timestamp {
            color: rgba(255, 255, 255, 0.2);
        }

        .chatlog__embed {
            display: flex;
            margin-top: 0.3em;
            max-width: 520px;
        }

        .chatlog__embed-color-pill {
            flex-shrink: 0;
            width: 0.25em;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        .chatlog__embed-color-pill--default {
            background-color: #202225;
        }

        .chatlog__embed-content-container {
            display: flex;
            flex-direction: column;
            padding: 0.5em 0.6em;
            background-color: rgba(46, 48, 54, 0.3);
            border: 1px solid rgba(46, 48, 54, 0.6);
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        .chatlog__embed-content {
            display: flex;
            width: 100%;
        }

        .chatlog__embed-text {
            flex: 1;
        }

        .chatlog__embed-author {
            display: flex;
            margin-bottom: 0.3em;
            align-items: center;
        }

        .chatlog__embed-author-icon {
            margin-right: 0.5em;
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        .chatlog__embed-author-name {
            font-size: 0.875em;
            font-weight: 600;
            direction: ltr;
            unicode-bidi: bidi-override;
            color: #ffffff
        }

        .chatlog__embed-author-name-link {
            color: #ffffff;
        }

        .chatlog__embed-title {
            margin-bottom: 0.2em;
            font-size: 0.875em;
            font-weight: 600;
            color: #ffffff;
        }

        .chatlog__embed-description {
            font-weight: 500;
            font-size: 0.85em;
            color: #dcddde;
        }

        .chatlog__embed-fields {
            display: flex;
            flex-wrap: wrap;
            gap: 0 0.5em;
        }

        .chatlog__embed-field {
            flex: 0;
            min-width: 100%;
            max-width: 506px;
            padding-top: 0.6em;
            font-size: 0.875em;
        }

        .chatlog__embed-field--inline {
            flex: 1;
            flex-basis: auto;
            min-width: 150px;
        }

        .chatlog__embed-field-name {
            margin-bottom: 0.2em;
            font-weight: 600;
            color: #ffffff;
        }

        .chatlog__embed-field-value {
            font-weight: 500;
            color: #dcddde;
        }

        .chatlog__embed-thumbnail {
            flex: 0;
            margin-left: 1.2em;
            max-width: 80px;
            max-height: 80px;
            border-radius: 3px;
        }

        .chatlog__embed-image-container {
            margin-top: 0.6em;
        }

        .chatlog__embed-image {
            max-width: 500px;
            max-height: 400px;
            border-radius: 3px;
        }

        .chatlog__embed-footer {
            margin-top: 0.6em;
            color: #dcddde;
        }

        .chatlog__embed-footer-icon {
            margin-right: 0.2em;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            vertical-align: middle;
        }

        .chatlog__embed-footer-text {
            vertical-align: middle;
            font-size: 0.75em;
            font-weight: 500;
        }

        .chatlog__embed-plainimage {
            vertical-align: top;
            max-width: 45vw;
            max-height: 500px;
            border-radius: 3px;
        }

        .chatlog__embed-spotify {
            border: 0;
        }

        .chatlog__embed-youtube-container {
            margin-top: 0.6em;
        }

        .chatlog__embed-youtube {
            border: 0;
            border-radius: 3px;
        }

        .chatlog__sticker {
            width: 180px;
            height: 180px;
        }

        .chatlog__sticker--media {
            max-width: 100%;
            max-height: 100%;
        }

        .chatlog__reactions {
            display: flex;
        }

        .chatlog__reaction {
            display: flex;
            align-items: center;
            margin: 0.35em 0.1em 0.1em 0;
            padding: .125rem .375rem;
            background-color: #2f3136;
            border-radius: 8px;
            border-color: transparent;
            border-width: 1px;
            border-style: solid;
        }

        .chatlog__reaction:hover {
            border-color: hsla(0,0%,100%,.2);
            border-width: 1px;
            border-style: solid;
            background-color: transparent;
        }

        .chatlog__reaction-count {
            min-width: 9px;
            margin-left: 0.35em;
            font-size: 0.875em;
            color: #b9bbbe;
        }

        .chatlog__reaction:hover .chatlog__reaction-count {
            color: #dcddde;
        }

        .chatlog__bot-tag {
            position: relative;
            top: -.1em;
            margin-left: 0.3em;
            padding: 0.05em 0.3em;
            border-radius: 3px;
            line-height: 1.3;
            background-color: #5865F2;
            color: #ffffff;
            font-size: 0.625em;
            font-weight: 500;
        }

        .postamble {
            margin: 1.4em 0.3em 0.6em 0.3em;
            padding: 1em;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .postamble__entry {
            color: #ffffff;
        }
  </style>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/solarized-dark.min.css" rel="stylesheet"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js">
  </script>
  <script>
   document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.pre--multiline').forEach(e => hljs.highlightBlock(e));
        });
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js">
  </script>
  <script>
   document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.chatlog__sticker--media[data-source]').forEach(e => {
                const imageDataUrl = e.getAttribute('data-source');

                const anim = lottie.loadAnimation({
                  container: e,
                  renderer: 'svg',
                  loop: true,
                  autoplay: true,
                  path: imageDataUrl
                });

                anim.addEventListener('data_failed', () =>
                    e.innerHTML = '<strong>[Sticker cannot be rendered]</strong>'
                );
            });
        });
  </script>
  <script>
   function scrollToMessage(event, id) {
            var element = document.getElementById('message-' + id);

            if (element) {
                event.preventDefault();

                element.classList.add('chatlog__message--highlighted');

                window.scrollTo({
                    top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (window.innerHeight / 2),
                    behavior: 'smooth'
                });

                window.setTimeout(function() {
                    element.classList.remove('chatlog__message--highlighted');
                }, 2000);
            }
        }

        function showSpoiler(event, element) {
            if (element && element.classList.contains('spoiler-text--hidden')) {
                event.preventDefault();
                element.classList.remove('spoiler-text--hidden');
            }
            if (element && element.classList.contains('chatlog__attachment--hidden')) {
                event.preventDefault();
                element.classList.remove('chatlog__attachment--hidden');
            }
        }
  </script>
  <svg style="display: none">
   <symbol id="icon-attachment" viewbox="0 0 720 960">
    <path d="M50,935a25,25,0,0,1-25-25V50A25,25,0,0,1,50,25H519.6L695,201.32V910a25,25,0,0,1-25,25Z" fill="#f4f5fb">
    </path>
    <path d="M509.21,50,670,211.63V910H50V50H509.21M530,0H50A50,50,0,0,0,0,50V910a50,50,0,0,0,50,50H670a50,50,0,0,0,50-50h0V191Z" fill="#7789c4">
    </path>
    <path d="M530,215a25,25,0,0,1-25-25V50a25,25,0,0,1,16.23-23.41L693.41,198.77A25,25,0,0,1,670,215Z" fill="#f4f5fb">
    </path>
    <path d="M530,70.71,649.29,190H530V70.71M530,0a50,50,0,0,0-50,50V190a50,50,0,0,0,50,50H670a50,50,0,0,0,50-50Z" fill="#7789c4">
    </path>
   </symbol>
  </svg>
 </head>
 <body>
  <div class="preamble">
   <div class="preamble__guild-icon-container">
    <img alt="Guild icon" class="preamble__guild-icon" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/68e6057b84c027d0b6da59681810b5b3-8BBDA.png"/>
   </div>
   <div class="preamble__entries-container">
    <div class="preamble__entry">
     Creation Lab
    </div>
    <div class="preamble__entry">
     歷史劇本-魔改沼澤人 / kp用
    </div>
   </div>
  </div>
  <div class="chatlog">
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      23-Feb-21 09:09 PM
     </span>
     <div class="chatlog__message chatlog__message--pinned" data-message-id="813759368360493131" id="message-813759368360493131" title="Message sent: 23-Feb-21 09:09 PM">
      <div class="chatlog__attachment" onclick="">
       <a href="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/unknown-2D0F9.png">
        <img alt="Image attachment" class="chatlog__attachment-media" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/unknown-2D0F9.png" title="Image: unknown.png (73.24 KB)"/>
       </a>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="813759390904483891" id="message-813759390904483891" title="Message sent: 23-Feb-21 09:09 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         map1
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__reference-symbol">
    </div>
    <div class="chatlog__reference">
     <span class="chatlog__reference-unknown">
      Original message was deleted or could not be loaded.
     </span>
    </div>
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      23-Feb-21 09:09 PM
     </span>
     <div class="chatlog__message" data-message-id="813759404624707614" id="message-813759404624707614" title="Message sent: 23-Feb-21 09:09 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         Pinned a message.
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      08-Mar-21 01:34 AM
     </span>
     <div class="chatlog__message" data-message-id="818174872530190366" id="message-818174872530190366" title="Message sent: 08-Mar-21 01:34 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         cc 35
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      08-Mar-21 01:34 AM
     </span>
     <div class="chatlog__message chatlog__message--pinned" data-message-id="818174873951666197" id="message-818174873951666197" title="Message sent: 08-Mar-21 01:34 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1D100 ≦ 35：
97 → 啊！大失敗！
        </span>
       </div>
      </div>
      <div class="chatlog__reactions">
       <div class="chatlog__reaction" title="weed_nothing">
        <img alt="weed_nothing" class="emoji emoji--small" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/791438856606973972-E6E6C.png"/>
        <span class="chatlog__reaction-count">
         2
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      08-Mar-21 01:34 AM
     </span>
     <div class="chatlog__message" data-message-id="818174897918312448" id="message-818174897918312448" title="Message sent: 08-Mar-21 01:34 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__reference-symbol">
    </div>
    <div class="chatlog__reference">
     <span class="chatlog__reference-unknown">
      Original message was deleted or could not be loaded.
     </span>
    </div>
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      08-Mar-21 01:35 AM
     </span>
     <div class="chatlog__message" data-message-id="818174915957882910" id="message-818174915957882910" title="Message sent: 08-Mar-21 01:35 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         Pinned a message.
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      09-Mar-21 11:14 PM
     </span>
     <div class="chatlog__message" data-message-id="818864253707878460" id="message-818864253707878460" title="Message sent: 09-Mar-21 11:14 PM">
      <div class="chatlog__attachment" onclick="">
       <a href="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/1466358047534-FFF88.png">
        <img alt="Image attachment" class="chatlog__attachment-media" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/1466358047534-FFF88.png" title="Image: 1466358047534.png (1.24 MB)"/>
       </a>
      </div>
      <div class="chatlog__reactions">
       <div class="chatlog__reaction" title="weed_nothing">
        <img alt="weed_nothing" class="emoji emoji--small" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/791438856606973972-E6E6C.png"/>
        <span class="chatlog__reaction-count">
         2
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="818864359828094977" id="message-818864359828094977" title="Message sent: 09-Mar-21 11:14 PM">
      <div class="chatlog__attachment" onclick="">
       <a href="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/Taiyotomato-Ramen_1-D5826.png">
        <img alt="Image attachment" class="chatlog__attachment-media" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/Taiyotomato-Ramen_1-D5826.png" title="Image: Taiyotomato-Ramen_1.png (660.89 KB)"/>
       </a>
      </div>
      <div class="chatlog__reactions">
       <div class="chatlog__reaction" title="weed_nothing">
        <img alt="weed_nothing" class="emoji emoji--small" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/791438856606973972-E6E6C.png"/>
        <span class="chatlog__reaction-count">
         2
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="818864779610292284" id="message-818864779610292284" title="Message sent: 09-Mar-21 11:16 PM">
      <div class="chatlog__attachment" onclick="">
       <a href="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/aa33ed484b04737e-D6420.png">
        <img alt="Image attachment" class="chatlog__attachment-media" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/aa33ed484b04737e-D6420.png" title="Image: aa33ed484b04737e.png (2.11 MB)"/>
       </a>
      </div>
      <div class="chatlog__reactions">
       <div class="chatlog__reaction" title="weed_nothing">
        <img alt="weed_nothing" class="emoji emoji--small" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/791438856606973972-E6E6C.png"/>
        <span class="chatlog__reaction-count">
         2
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      27-Mar-21 10:26 PM
     </span>
     <div class="chatlog__message" data-message-id="825375135405047820" id="message-825375135405047820" title="Message sent: 27-Mar-21 10:26 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         cc 10
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      27-Mar-21 10:26 PM
     </span>
     <div class="chatlog__message" data-message-id="825375136760463390" id="message-825375136760463390" title="Message sent: 27-Mar-21 10:26 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1D100 ≦ 10：
52 → 失敗
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      27-Mar-21 11:20 PM
     </span>
     <div class="chatlog__message" data-message-id="825388917762424862" id="message-825388917762424862" title="Message sent: 27-Mar-21 11:20 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         呃
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825388997021794315" id="message-825388997021794315" title="Message sent: 27-Mar-21 11:21 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         這個是卡卡對伶花的心理學1D100 ≦ 10：
98 → 啊！大失敗！
        </span>
        <span class="chatlog__edited-timestamp" title="27-Mar-21 11:23 PM">
         (edited)
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825389128564473906" id="message-825389128564473906" title="Message sent: 27-Mar-21 11:21 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         的暗骰
1D100 ≦ 35：
15 → 困難成功
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         的暗骰
1D100 ≦ 35：
18 → 通常成功
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825389141981659166" id="message-825389141981659166" title="Message sent: 27-Mar-21 11:21 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         以上兩個01的
        </span>
        <span class="chatlog__edited-timestamp" title="27-Mar-21 11:21 PM">
         (edited)
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825390683065548851" id="message-825390683065548851" title="Message sent: 27-Mar-21 11:27 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         1d24：
22[22] = 22
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825390696356905010" id="message-825390696356905010" title="Message sent: 27-Mar-21 11:27 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         房間
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825390716016001045" id="message-825390716016001045" title="Message sent: 27-Mar-21 11:28 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         404
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="825390772794425346" id="message-825390772794425346" title="Message sent: 27-Mar-21 11:28 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <s>
          有點危
         </s>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      28-Mar-21 12:49 AM
     </span>
     <div class="chatlog__message" data-message-id="825411132981510185" id="message-825411132981510185" title="Message sent: 28-Mar-21 12:49 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         1d3+3d6
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      28-Mar-21 12:49 AM
     </span>
     <div class="chatlog__message" data-message-id="825411134365761586" id="message-825411134365761586" title="Message sent: 28-Mar-21 12:49 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1d3+3d6：
3[3]+14[2+6+6] = 17
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      06-Apr-21 10:54 PM
     </span>
     <div class="chatlog__message" data-message-id="829006146869788684" id="message-829006146869788684" title="Message sent: 06-Apr-21 10:54 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         cc 10 已1
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      06-Apr-21 10:54 PM
     </span>
     <div class="chatlog__message" data-message-id="829006148237525022" id="message-829006148237525022" title="Message sent: 06-Apr-21 10:54 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1D100 ≦ 10：
74 → 失敗：已1
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      06-Apr-21 11:21 PM
     </span>
     <div class="chatlog__message" data-message-id="829012971761434624" id="message-829012971761434624" title="Message sent: 06-Apr-21 11:21 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         cc 10 2
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      06-Apr-21 11:21 PM
     </span>
     <div class="chatlog__message" data-message-id="829012972797296640" id="message-829012972797296640" title="Message sent: 06-Apr-21 11:21 PM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1D100 ≦ 10：
17 → 失敗：2
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 12:17 AM
     </span>
     <div class="chatlog__message" data-message-id="829027031643717682" id="message-829027031643717682" title="Message sent: 07-Apr-21 12:17 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         cc 35
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 12:17 AM
     </span>
     <div class="chatlog__message" data-message-id="829027032868061184" id="message-829027032868061184" title="Message sent: 07-Apr-21 12:17 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         1D100 ≦ 35：
82 → 失敗
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 03:48 AM
     </span>
     <div class="chatlog__message" data-message-id="829080151504977980" id="message-829080151504977980" title="Message sent: 07-Apr-21 03:48 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         10000+1D30000
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="544462904037081138" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <span class="chatlog__bot-tag">
      BOT
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 03:48 AM
     </span>
     <div class="chatlog__message" data-message-id="829080152570462278" id="message-829080152570462278" title="Message sent: 07-Apr-21 03:48 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="Somniumterra#4523">
          @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
         </span>
         10000+1D30000：
10000+2817[2817] = 12817
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 10:42 AM
     </span>
     <div class="chatlog__message" data-message-id="829184320542605332" id="message-829184320542605332" title="Message sent: 07-Apr-21 10:42 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <img alt="great" class="emoji emoji--large" loading="lazy" src="https://cdn.discordapp.com/emojis/659311680878149633.png" title="great"/>
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="829184424763588700" id="message-829184424763588700" title="Message sent: 07-Apr-21 10:42 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         這有心理學骰子
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__reference-symbol">
    </div>
    <div class="chatlog__reference">
     <img alt="Avatar" class="chatlog__reference-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/826b76664e4c68ff4d29076c48a02bed-E8951.png"/>
     <span class="chatlog__reference-name" style="color: rgb(228,180,0)" title="HKTRPG#4989">
      HKTRPG
     </span>
     <div class="chatlog__reference-content">
      <span class="chatlog__reference-link" onclick="scrollToMessage(event, '818174873951666197')">
       <span class="mention" title="Somniumterra#4523">
        @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
       </span>
       1D100 ≦ 35：
97 → 啊！大失敗！
      </span>
     </div>
    </div>
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 10:44 AM
     </span>
     <div class="chatlog__message" data-message-id="829184885704753192" id="message-829184885704753192" title="Message sent: 07-Apr-21 10:44 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <span class="mention" title="suck0202#4707">
          @挖打西挖NO.1
         </span>
         這是你對川的閣樓心理學
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__reference-symbol">
    </div>
    <div class="chatlog__reference">
     <img alt="Avatar" class="chatlog__reference-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
     <span class="chatlog__reference-name" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <div class="chatlog__reference-content">
      <span class="chatlog__reference-link" onclick="scrollToMessage(event, '825389128564473906')">
       <span class="mention" title="Somniumterra#4523">
        @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
       </span>
       的暗骰
1D100 ≦ 35：
15 → 困難成功
       <span class="mention" title="Somniumterra#4523">
        @͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
       </span>
       的暗骰
1D100 ≦ 35：
18 → 通常成功
      </span>
     </div>
    </div>
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 10:45 AM
     </span>
     <div class="chatlog__message" data-message-id="829185059503996969" id="message-829185059503996969" title="Message sent: 07-Apr-21 10:45 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         這兩個是男人心理
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__reference-symbol">
    </div>
    <div class="chatlog__reference">
     <img alt="Avatar" class="chatlog__reference-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
     <span class="chatlog__reference-name" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <div class="chatlog__reference-content">
      <span class="chatlog__reference-link" onclick="scrollToMessage(event, '825388997021794315')">
       這個是卡卡對伶花的心理學1D100 ≦ 10：
98 → 啊！大失敗！
      </span>
      <span class="chatlog__reference-edited-timestamp" title="27-Mar-21 11:23 PM">
       (edited)
      </span>
     </div>
    </div>
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/bb4bed715b124eda9514b324be33c541-69848.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="638284901191516171" style="color: rgb(228,180,0)" title="Somniumterra#4523">
      ͔∑: 3愚珠汰怖廢怒李卑-KP化櫻本文代
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 10:46 AM
     </span>
     <div class="chatlog__message" data-message-id="829185340475703326" id="message-829185340475703326" title="Message sent: 07-Apr-21 10:46 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         卡卡這個大失敗資訊是"從伶花的小動作看出了她可能是害羞了,她應該不習慣這樣的眼睛接觸,你甚至覺得她臉好像有點紅"
        </span>
       </div>
      </div>
     </div>
     <div class="chatlog__message" data-message-id="829185454883602453" id="message-829185454883602453" title="Message sent: 07-Apr-21 10:46 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <img alt="weed_nothing" class="emoji emoji--large" loading="lazy" src="https://cdn.discordapp.com/emojis/791438856606973972.png" title="weed_nothing"/>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="chatlog__message-group">
    <div class="chatlog__author-avatar-container">
     <img alt="Avatar" class="chatlog__author-avatar" loading="lazy" src="Creation%20Lab%20-%20%E6%AD%B7%E5%8F%B2%E5%8A%87%E6%9C%AC-%E9%AD%94%E6%94%B9%E6%B2%BC%E6%BE%A4%E4%BA%BA%20-%20kp%E7%94%A8%20%5B813759313922359356%5D.html_Files/14f99aa3d1944e872ef3becb98888eac-7C5B4.png"/>
    </div>
    <div class="chatlog__messages">
     <span class="chatlog__author-name" data-user-id="403904071750254592" style="color: rgb(233,30,99)" title="suck0202#4707">
      挖打西挖NO.1
     </span>
     <span class="chatlog__timestamp">
      07-Apr-21 11:15 AM
     </span>
     <div class="chatlog__message" data-message-id="829192545665941583" id="message-829192545665941583" title="Message sent: 07-Apr-21 11:15 AM">
      <div class="chatlog__content">
       <div class="markdown">
        <span class="preserve-whitespace">
         <img alt="weed_nothing" class="emoji emoji--large" loading="lazy" src="https://cdn.discordapp.com/emojis/791438856606973972.png" title="weed_nothing"/>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="postamble">
   <div class="postamble__entry">
    Exported 37 message(s)
   </div>
  </div>
 </body>
</html>
