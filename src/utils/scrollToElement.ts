export const scrollToElement = (elementId: string, offset = 0): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  }
}; 