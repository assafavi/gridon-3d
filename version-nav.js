document.addEventListener('DOMContentLoaded',()=>{
  const intro=document.getElementById('intro');
  if(!intro||document.getElementById('versionLauncherBack'))return;
  const link=document.createElement('a');
  link.id='versionLauncherBack';
  link.className='versionLauncherBack';
  link.href='../';
  link.textContent='← VERSIONS';
  link.setAttribute('aria-label','Return to GRIDON version selector');
  intro.appendChild(link);
});
