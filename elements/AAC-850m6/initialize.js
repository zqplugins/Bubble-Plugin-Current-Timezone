function(instance, context) {
  const opts = Intl.DateTimeFormat().resolvedOptions();
  instance.publishState("locale", opts.locale);
  instance.publishState("timezone", opts.timeZone);
}