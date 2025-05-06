// priority: 0

StartupEvents.registry('item', event => {

  const items = [
    'internal_circuit',
    'pcb_base',
    'power_supply',
    'incomplete_processor',
    'incomplete_advanced_processor',
    'processor',
    'advanced_processor',
    'computer_board',
    'advanced_computer_board',
    'wireless_ender_core',
  ];

  for (const item of items)
    event.create('cc_recrafted:' + item);

});