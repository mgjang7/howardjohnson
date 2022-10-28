window.googleTranslateElementInit = function () {
    try {
      const google = window.google
      new google.translate.TranslateElement(
        {
          includedLanguages: 'en,ko',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      )
    } catch (e) {
      console.error(e)
    }
  }