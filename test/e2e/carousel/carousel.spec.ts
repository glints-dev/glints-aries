import { test, expect } from '@playwright/test';
import { CarouselPage } from './carouselPage';

test('Carousel', async ({ page }) => {
  const carouselPage = new CarouselPage(page);
  await carouselPage.goto();
  await expect(carouselPage.container).toHaveScreenshot('carousel.png');
});

test('Carousel - autoRotate', async ({ page }) => {
  const carouselPage = new CarouselPage(page);
  await carouselPage.goto('args=autoRotate:true');

  await carouselPage.canvas.click({
    position: { x: 1, y: 1 },
  });
  await expect(carouselPage.container).toHaveScreenshot(
    'carousel-autoRotate.png'
  );
});
