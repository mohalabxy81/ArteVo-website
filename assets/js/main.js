// Main JS file for all pages
// General helpers: image lazy-loading and alt-text audit

(function () {
	'use strict';

	function runImageAudit() {
		const imgs = Array.from(document.getElementsByTagName('img'));
		const missingAlts = [];
		imgs.forEach((img) => {
			try {
				// Add lazy loading where not present (non-destructive)
				if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');

				// Collect missing or empty alt attributes
				const alt = img.getAttribute('alt');
				if (alt === null || (typeof alt === 'string' && alt.trim() === '')) {
					// record a short context for debugging
					const src = img.currentSrc || img.src || img.getAttribute('data-src') || '(inline)';
					missingAlts.push(src);
				}
			} catch (e) {
				// defensive: ignore problematic images
			}
		});

		if (missingAlts.length) {
			console.warn(`[images] ${missingAlts.length} images missing alt text (examples):`, missingAlts.slice(0, 10));
		} else {
			console.log('[images] Image audit: all images have alt text (or none detected missing).');
		}
		return { total: imgs.length, missing: missingAlts.length, examples: missingAlts.slice(0, 10) };
	}

	// Observe dynamic DOM changes and re-run audit/application (debounced)
	let _imgAuditTimer = null;
	function enableImageObserver() {
		if (typeof MutationObserver === 'undefined') return;
		const observer = new MutationObserver((mutations) => {
			if (_imgAuditTimer) clearTimeout(_imgAuditTimer);
			_imgAuditTimer = setTimeout(() => runImageAudit(), 120);
		});
		observer.observe(document.body, { childList: true, subtree: true });
	}

	document.addEventListener('DOMContentLoaded', function () {
		// run once on load
		runImageAudit();
		// enable observer for dynamically inserted images
		enableImageObserver();
	});

	// Expose for manual invocation in console/tests
	window.artevoImageAudit = runImageAudit;
})();

// ... أضف هنا أكواد جافاسكريبت عامة لجميع الصفحات مثل الترجمة أو التنقل ...
