const box = document.querySelector('.enterar');

    document.addEventListener('mousemove', (e) => {
      // div의 중심 좌표 계산
      const rect = box.getBoundingClientRect();
      const boxCenterX = rect.left + rect.width / 2;
      const boxCenterY = rect.top + rect.height / 2;

      // 마우스 위치와 div 중심 간의 거리 계산
      const deltaX = e.clientX - boxCenterX;
      const deltaY = e.clientY - boxCenterY;

      // 그림자 offset 계산 (마우스 방향에 따라 반대 방향으로 그림자 이동)
      const maxDistance = 100; // 그림자 이동 거리 제한
      const shadowX = -(deltaX / maxDistance) * 5; // X축 그림자 이동
      const shadowY = -(deltaY / maxDistance) * 5; // Y축 그림자 이동
      const blur = 20; // 그림자 흐림 정도
      const spread = 2; // 그림자 확산 정도

      // box-shadow 스타일 적용
      box.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px ${spread}px rgba(0, 0, 0, 0.3)`;
    });