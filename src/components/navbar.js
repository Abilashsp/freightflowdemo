import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Navbarlist from "./Navbarlist"


import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'


const navigation = [



  {
    name: 'Order Managment',
    icon: UsersIcon,
    current: false,
    abi:false,
    children: [
      { current: false, name: ' Creation', href: 'p/order_management/creation',  },
      { current: false, name: ' Tracking', href: 'p/order_management/tracking'},
      { current: false, name: 'Modification', href: 'order_management/modification', },
      { current: false, name: ' History', href: 'order_management/history',  },
      { current: false, name: 'Approval', href: 'order_management/approval',  },
      { current: false, name: ' Reporting', href: 'order_management/reporting', },
      { current: false, name: 'Cancellation', href: 'order_management/cancellation',  },
      { current: false, name: 'Invoicing', href: 'order_management/invoicing',  },
      { current: false, name: 'Returns & Refunds', href: 'order_management/return_refunds',  },
      { current: false, name: 'Integration', href: 'order_management/integration', },
      { current: false, name: 'Support', href: 'order_management/support', },
    ],
  },
  {
    name: '	Packaging Solutions',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Standard Packaging Options', href: 'packing_solution/standard_packing_option', },
      { current: false, name: 'Specialized Packaging Options', href: 'packing_solution/speacilaized_packing_option',  },
      { current: false, name: 'Packaging Design & Customization', href: 'packing_solution/p_design_costomizede',  },
      { current: false, name: 'Packaging Compliance & Regulations', href: 'packing_solution/p_compliance_regulation',},
      { current: false, name: 'Packaging Cost Estimation', href: '	packing_solution/p_cost_estimation',  },
      { current: false, name: 'Packaging Tracking & Inventory', href: 'packing_solution/p_tracking_inventory',},
      { current: false, name: 'Packaging Sustainability Options', href: 'packing_solution/p_sustainability_option',},
      { current: false, name: 'Packaging Support & Consultation', href: 'packing_solution/p_support_consultation', },
    ],
  },
  {
    name: 'Transportation Services',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Pickup Scheduling', href: 'transportation_services/picking_schedule',  },
      { current: false, name: 'Vehicle Selection & Management', href: '	transportation_services/vehicle_sel_managment',},
      { current: false, name: 'Route Planning & Optimization', href: '	transportation_services/route_planning_optim',  },
      { current: false, name: 'Real-Time Tracking & Monitoring', href: '	transportation_services/realtime_tra_monitor', },
      { current: false, name: 'Transportation Compliance', href: '	transportation_services/transportation_compliance copy',},
      { current: false, name: 'Specialized Transportation Options', href: 'transportation_services/specialized_tra_option', },
      { current: false, name: 'Transportation Cost Estimation', href: '	transportation_services/transportation_cost_estimation', },
      { current: false, name: 'Transportation Support & Assistance', href: 'transportation_services/transportation_support_asst', },
    ],
  },
  {
    name: '	Airport Security & Handling',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Security Screening & Inspection', href: '	air_security_handling/security_screen_insp', },
      { current: false, name: 'Cargo Handling & Storage', href: '	air_security_handling/cargo_handle_storage',},
      { current: false, name: 'Customs Documentation & Clearance', href: '	air_security_handling/custom_docs_clerance', },
      { current: false, name: 'Specialized Handling Requirements', href: '	air_security_handling/specialized_han_requirement', },
      { current: false, name: 'Loading & Unloading Operations', href: '	air_security_handling/loading_unloading_operation',  },
      { current: false, name: 'Real-Time Monitoring & Tracking', href: '	air_security_handling/realtime_monitor_tra',},
      { current: false, name: 'Emergency Response & Contingency', href: '	air_security_handling/emergency_respon_contingency',  },
      { current: false, name: 'Coordination with Airlines & Agents', href: '	air_security_handling/cordination_airline_agent',  },
    ],
  },
  {
    name: '	Airline Coordination',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Flight Scheduling & Booking', href: 'airline_coordination/flight_schedule_booking', },
      { current: false, name: 'Cargo Loading & Unloading Plans', href: '	airline_coordination/cargo_loading_unlo_plans', },
      { current: false, name: 'Real-Time Flight Tracking', href: '	airline_coordination/realtime_flight_tracking',  },
      { current: false, name: 'Airline Partnerships & Agreements', href: '	airline_coordination/airline_partn_agreemnet', },
      { current: false, name: 'Compliance & Regulatory Coordination', href: 'airline_coordination/complince_reg_coordination', },
      { current: false, name: 'Specialized Cargo Handling', href: '	airline_coordination/specialized_cargo_handling',  },
      { current: false, name: 'Communication & Collaboration Tools', href: '	airline_coordination/communication_coll_tools', },
      { current: false, name: 'Issue Resolution & Support', href: '	airline_coordination/issue_resolutin_support', },
    ],
  },
  {
    name: '	Flight & Air Transit',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Flight Planning & Scheduling', href: '	flight_air_transit/flight_planning_scheduling',  },
      { current: false, name: 'In-Flight Cargo Monitoring', href: '	flight_air_transit/in_flight _cargo_monitoring',},
      { current: false, name: 'Transit & Layover Coordination', href: '	flight_air_transit/transit_layover_coordination',  },
      { current: false, name: 'Flight Crew Coordination', href: '	flight_air_transit/flight _crew_coordination',  },
      { current: false, name: 'Air Traffic Control Communication', href: '	flight_air_transit/air_traffic_control_communication', },
      { current: false, name: 'Emergency Procedures & Contingency', href: '	flight_air_transit/emergency _procedures_contingency',  },
      { current: false, name: 'Fuel Management & Efficiency', href: '	flight_air_transit/fuel_management_efficiency', },
      { current: false, name: 'Regulatory Compliance & Reporting', href: '	flight_air_transit/regulatory_compliance_reporting',  },
    ],
  },
  {
    name: 'Customs & Arrival Services',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Customs Documentation & Clearance', href: '	customs_arrival_services/customs_documentation_clearance',  },
      { current: false, name: 'Import/Export Regulations', href: 'customs_arrival_services/import_export_regulations',  },
      { current: false, name: 'Inspection & Quarantine Services', href: '	customs_arrival_services/inspection_quarantine_services',  },
      { current: false, name: 'Arrival Coordination & Scheduling', href: '	customs_arrival_services/arrival_coordination_scheduling',  },
      { current: false, name: 'Specialized Handling Requirements', href: 'customs_arrival_services/specialized_handling_requirements',  },
      { current: false, name: 'Duty & Tax Calculation', href: '	customs_arrival_services/duty_tax_calculation', },
      { current: false, name: 'Brokerage & Agent Services', href: '	customs_arrival_services/brokerage_agent_services', },
      { current: false, name: 'Issue Resolution & Support', href: '	customs_arrival_services/issue_resolution_support', },
    ],
  },
  {
    name: 'Final Delivery & Destination',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Delivery Scheduling & Coordination', href: 'final_delivery_destination/delivery_scheduling_coordination', },
      { current: false, name: 'Last-Mile Delivery Options', href: '	final_delivery_destination/last_mile_delivery_options',  },
      { current: false, name: 'Real-Time Tracking & Notifications', href: '	final_delivery_destination/real_time_tracking_notifications',  },
      { current: false, name: 'Specialized Handling & Requirements', href: '	final_delivery_destination/specialized_handling_requirements',  },
      { current: false, name: 'Proof of Delivery & Signatures', href: 'final_delivery_destination/proof_of_delivery_signatures',  },
      { current: false, name: 'Returns & Reverse Logistics', href: '	final_delivery_destination/returns_reverse_logistics',  },
      { current: false, name: 'Customer Support & Issue Resolution', href: '	final_delivery_destination/customer_support_issue_resolution',  },
      { current: false, name: 'Reporting & Analytics', href: '	final_delivery_destination/reporting_analytics',  },
    ],
  },
  {
    name: 'Tracking & Reporting',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Real-Time Cargo Tracking', href: '	tracking_reporting/real_time_cargo_tracking', },
      { current: false, name: 'Performance Analytics & Metrics', href: '	tracking_reporting/performance_analytics_metrics', },
      { current: false, name: 'Customized Reporting & Dashboards', href: '	tracking_reporting/customized_reporting_dashboards', },
      { current: false, name: 'Alerts & Notifications', href: '	tracking_reporting/alerts_notifications', },
      { current: false, name: 'Compliance & Regulatory Reporting', href: 'tracking_reporting/complian_regulatory_reporting', },
      { current: false, name: 'Customer Access & Visibility', href: 'tracking_reporting/customer_access_visibility', },
      { current: false, name: 'Historical Data & Trend Analysis', href: 'tracking_reporting/historical_data_trend_analysis', },
      { current: false, name: 'Issue Tracking & Resolution', href: 'tracking_reporting/issue_tracking_resolution', },
    ],
  },
  {
    name: 'Customer Support',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Inquiry & Request Handling', href: 'customer_support/inquiry_request_handling', },
      { current: false, name: 'Issue Resolution & Support', href: '	customer_support/issue_resolution_support', },
      { current: false, name: 'Tracking Assistance', href: '	customer_support/tracking_assistance', },
      { current: false, name: 'Feedback & Reviews', href: 'customer_support/feedback_reviews', },
      { current: false, name: 'Billing & Payment Support', href: '	customer_support/billing_payment_support', },
      { current: false, name: 'Specialized Services & Handling', href: 'customer_support/specialized_services_handling', },
      { current: false, name: 'Self-Service Tools & Resources', href: '	customer_support/self_service_tools_resources', },
      { current: false, name: 'Emergency & Critical Response', href: 'customer_support/emergency_critical_response', },
    ],
  },
  {
    name: 'Compliance & Quality',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Regulatory Compliance', href: '	compliance_quality/regulatory_compliance', },
      { current: false, name: 'Quality Assurance & Control', href: '	compliance_quality/quality_assurance_control', },
      { current: false, name: 'Certification & Accreditation', href: '	compliance_quality/certification_accreditation', },
      { current: false, name: 'Risk Assessment & Management', href: 'compliance_quality/risk_assessment_management', },
      { current: false, name: 'Environmental & Sustainability', href: 'compliance_quality/environmental_sustainability', },
      { current: false, name: 'Health & Safety Regulations', href: 'compliance_quality/health_safety_regulations', },
      { current: false, name: 'Auditing & Monitoring', href: '	compliance_quality/auditing_monitoring', },
      { current: false, name: 'Training & Development', href: 'compliance_quality/training_development', },
    ],
  },
  {
    name: 'Documentation Management',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Document Creation & Generation', href: 'documentation_management/doc_creation_generation', },
      { current: false, name: 'Document Storage & Archiving', href: 'documentation_management/doc_storage_archiving', },
      { current: false, name: 'Document Sharing & Collaboration', href: 'documentation_management/doc_sharing_collaboration', },
      { current: false, name: 'Document Tracking & Version Control', href: 'documentation_management/doc_tracking_version_control', },
      { current: false, name: 'Document Security & Access Control', href: 'documentation_management/doc_security_access_control', },
      { current: false, name: 'Document Approval & Workflow', href: '	documentation_management/doc_approval_workflow', },
      { current: false, name: 'Document Compliance & Regulations', href: 'documentation_management/doc_compliance_regulations', },
      { current: false, name: 'Document Reporting & Analytics', href: 'documentation_management/doc_reporting_analytics', },
    ],
  },
  {
    name: 'Warehousing Solutions',
    icon: FolderIcon,
    current: false,
    children: [
      { current: false, name: 'Inventory Management', href: 'warehousing_solutions/Inventory_management', childrens: [{ name: ' Inventory Overview', href: '	warehousing_solutions/Inventory_management/inventory_overview' }, { name: ' Stock Levels', href: 'warehousing_solutions/Inventory_management/stock_levels' }, { name: ' Inventory Adjustments', href: '	warehousing_solutions/Inventory_management/inventory_adjustments' }, { name: '  Product Catalog', href: 'warehousing_solutions/Inventory_management/product_catalog' }] },
      { current: false, name: 'Storage & Space Optimization', href: '	packaging_Solutions/sp_packing_option', childrens: [{ name: '  Space Layout Design', href: '	warehousing_solutions/storage_space_optimization/space_layout_design' }, { name: '  Storage Allocation', href: 'warehousing_solutions/storage_space_optimization/storage_allocation' }, { name: ' Capacity Planning', href: '	warehousing_solutions/storage_space_optimization/capacity_planning' }, { name: ' Space Utilization', href: 'warehousing_solutions/storage_space_optimization/space_utilization' },] },
      { current: false, name: 'Picking & Packing Operations', href: '	warehousing_solutions/picking_packing_operations', childrens: [{ name: ' Picking Lists', href: 'warehousing_solutions/picking_packing_operations/picking_lists' },{ name: '  Packing Instructions', href: '	warehousing_solutions/picking_packing_operations/packing_instructions' },{ name: '  Shipment Preparation', href: 'warehousing_solutions/picking_packing_operations/shipment_preparation' },{ name: ' Order Fulfillment', href: '	warehousing_solutions/picking_packing_operations/order_fulfillment' },] },
      { current: false, name: 'Receiving & Put-Away', href: 'warehousing_solutions/receiving_put_away', childrens: [{ name: ' Receiving Dashboard', href: 'warehousing_solutions/receiving_put_away/receiving_dashboard' },{ name: '  PutAway Guidelines', href: '	warehousing_solutions/receiving_put_away/putaway_guidelines' },{ name: ' Inspection Reports', href: 'warehousing_solutions/receiving_put_away/inspection_reports' },{ name: ' Inbound Scheduling', href: 'warehousing_solutions/receiving_put_away/inbound_scheduling' },] },
      { current: false, name: 'Cross-Docking & Transloading', href: '	warehousing_solutions/cross_docking_transloading', childrens: [{ name: ' CrossDocking Management', href: '	warehousing_solutions/cross_docking_transloading/crossDocking_management' },{ name: ' Transloading Operations', href: 'warehousing_solutions/cross_docking_transloading/transloading_operations' },{ name: ' Direct Transfer Scheduling', href: 'warehousing_solutions/cross_docking_transloading/direct_transfer_scheduling' },] },
      { current: false, name: 'Temperature & Climate Control', href: '	warehousing_solutions/temperature_climate_control', childrens: [{ name: ' Temperature Monitoring', href: 'warehousing_solutions/temperature_climate_control/temperature_monitoring' },{ name: ' Climate Settings', href: '	warehousing_solutions/temperature_climate_control/climate_settings' },{ name: ' Sensitive Goods Management', href: 'warehousing_solutions/temperature_climate_control/sensitive_goods_management' },] },
      { current: false, name: 'Security & Access Control', href: 'warehousing_solutions/security_access_control', childrens: [{ name: ' Security Protocols', href: 'warehousing_solutions/security_access_control/security_protocols' },{ name: ' Access Permissions', href: '	warehousing_solutions/security_access_control/access_permissions' },{ name: 'Surveillance Monitoring', href: 'warehousing_solutions/security_access_control/surveillance_monitoring' },{ name: 'Incident Reports', href: '	warehousing_solutions/security_access_control/incident_reports' }] },
      { current: false, name: 'Reporting & Analytics', href: '	warehousing_solutions/reporting_analytics', childrens: [{ name: ' Operational Reports', href: '	warehousing_solutions/reporting_analytics/operational_reports' },{ name: ' Performance Analytics', href: 'warehousing_solutions/reporting_analytics/performance_analytics' },{ name: ' Trend Analysis', href: '	warehousing_solutions/reporting_analytics/trend_analysis' },{ name: ' Custom Dashboards', href: '	warehousing_solutions/reporting_analytics/custom_dashboards' },] },
    ],
  },




]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 max-w-xs h-screen">
      <div className="flex h-16 shrink-0 items-center">
        <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">Freight<mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Flow</mark> </h1>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <div

                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2  leading-6 font-semibold text-gray-700 focus:bg-blue-500 '
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      < Link href={item.href}>{item.name} </Link>
                    </div>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50 ',
                              ' group flex items-center w-full text-left rounded-md p-2 gap-x-3 text-base leading-6 font-semibold text-gray-700 focus:bg-blue-500 '
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem, index) => (
                              <li key={subItem.name}>

                                < Navbarlist subItem={subItem} index={index} />


                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
