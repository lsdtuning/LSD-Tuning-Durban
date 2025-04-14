fetch('vagcafe_parts.json')
  .then(res => res.json())
  .then(parts => {
    const container = document.getElementById('parts-list');

    parts.forEach(part => {
      const card = document.createElement('div');
      card.className = 'part-card';

      const whatsAppMsg = `Hi LSD Tuning, I'm interested in the ${part.part_name} for my ${part.brand} ${part.model} (${part.engine}). Here's the link: ${part.product_link}`;

      card.innerHTML = `
        <img src="${part.image}" alt="${part.part_name}" onerror="this.src='fallback.jpg'" />
        <h3>${part.part_name}</h3>
        <p><strong>Brand:</strong> ${part.brand}</p>
        <p><strong>Model:</strong> ${part.model}</p>
        <p><strong>Engine:</strong> ${part.engine}</p>
        <p class="price"><strong>Price:</strong> ${part.price}</p>
        <div class="btn-group">
          <a href="${part.product_link}" target="_blank" class="btn">View Product</a>
          <a href="https://wa.me/27718305852?text=${encodeURIComponent(whatsAppMsg)}" target="_blank" class="btn whatsapp">Order via WhatsApp</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Failed to load parts:', err);
    document.getElementById('parts-list').innerHTML = '<p>Could not load parts at this time.</p>';
  });
