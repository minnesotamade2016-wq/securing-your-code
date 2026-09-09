import { Component } from '@angular/core'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public navigation = [
    'Requests',
    'Customers',
    'Jobs & Work Orders',
    'Calendar',
    'Estimates & Invoices',
    'Customer Messages',
    'AI Office',
    'Parts & Inventory',
    'Documents & Forms',
    'Compliance',
    'Service Divisions',
    'Digital Projects',
    'Integrations',
    'Audit Log',
    'Settings'
  ]

  public navigationIcons: Record<string, string> = {
    Requests: 'visibility',
    Customers: 'people_outline',
    'Jobs & Work Orders': 'business_center',
    Calendar: 'calendar_today',
    'Estimates & Invoices': 'attach_money',
    'Customer Messages': 'mail_outline',
    'AI Office': 'auto_awesome',
    'Parts & Inventory': 'diamond',
    'Documents & Forms': 'article',
    Compliance: 'done',
    'Service Divisions': 'label',
    'Digital Projects': 'code',
    Integrations: 'north_east',
    'Audit Log': 'remove',
    Settings: 'settings'
  }

  public aiEngineEnabled = true
  public automaticallyReply = true
  public masterAutopilot = true
  public automaticallyBook = true
}
