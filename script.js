const box = document.getElementById('cardCrop');
const button = document.getElementById('trigger');

button.addEventListener('click', () => {
  // Stop default animation and apply new one
  box.style.animation = 'spin 2s linear';

  // When done, revert back to default animation
  box.addEventListener('animationend', function revert() {
    box.style.animation = 'rotate3D 5s linear infinite';
    // Remove the listener to avoid multiple triggers
    box.removeEventListener('animationend', revert);
  });
});
let lastPos = 0;
function checkMove() {
  const rect = box.getBoundingClientRect();
  const currentY = rect.top;
    let hey = getComputedStyle(box).transform;
  
  if(hey < matrix(1, 0, 0, 1, 0, 2.13316)) {
    if (currentY !== lastPos) {
    
    console.log('Moved to:', hey);
    lastPos = currentY;
  }
  }
  requestAnimationFrame(checkMove);
}

checkMove();