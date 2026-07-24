
(function(){
  // Local file preview: browsers do not resolve directory URLs to index.html under file://.
  // On HTTP/HTTPS the links remain clean (/about/, /uk/, etc.).
  if(window.location.protocol==='file:'){
    document.querySelectorAll('a[href]').forEach(function(link){
      var href=link.getAttribute('href');
      if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http:') || href.startsWith('https:')) return;
      if(href.endsWith('/')) link.setAttribute('href', href+'index.html');
    });
  }

  const btn=document.querySelector('.menu-button');
  const nav=document.querySelector('.site-nav');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
  const banner=document.querySelector('.cookie-banner');
  if(banner && !localStorage.getItem('pellironCookieChoice')){setTimeout(()=>banner.classList.add('show'),500);}
  document.querySelectorAll('[data-cookie-choice]').forEach(el=>el.addEventListener('click',()=>{localStorage.setItem('pellironCookieChoice',el.dataset.cookieChoice);if(banner)banner.classList.remove('show');}));
  const form=document.querySelector('[data-contact-form]');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(data.get('subject')||'Website enquiry');const body=encodeURIComponent((data.get('name')||'')+'\n'+(data.get('email')||'')+'\n\n'+(data.get('message')||''));window.location.href='mailto:info@pelliron.com?subject='+subject+'&body='+body;const status=form.querySelector('.form-status');if(status)status.hidden=false;});}
})();
