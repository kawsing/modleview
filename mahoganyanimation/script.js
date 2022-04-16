// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
  const modelViewer = event.target.querySelector('#xfade-demo');

  setInterval(() => {
    modelViewer.animationName = modelViewer.animationName === 'Sphere002Action' ? 'Object006||' : 'Sphere002Action';
  }, 150.0);
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
