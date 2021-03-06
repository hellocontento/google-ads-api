module.exports = {
    name: 'BillingSetup',
    object: {
        end_date_time: {
            _description: 'Output only. The end date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format.',
            _oneof: 'endTime',
            _type: 'string',
        },
        end_time_type: {
            _description: 'Output only. The end time as a type. The only possible value is FOREVER.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _oneof: 'endTime',
            _type: 'enum',
        },
        id: { _description: 'Output only. The ID of the billing setup.', _type: 'int64' },
        payments_account: {
            _description:
                'Immutable. The resource name of the payments account associated with this billing setup. Payments resource names have the form: <code>customers/{customer_id}/paymentsAccounts/{payments_account_id}</code> When setting up billing, this is used to signup with an existing payments account (and then payments_account_info should not be set). When getting a billing setup, this and payments_account_info will be populated.',
            _type: 'string',
        },
        payments_account_info: {
            _parent_description:
                'Immutable. The payments account information associated with this billing setup. When setting up billing, this is used to signup with a new payments account (and then payments_account should not be set). When getting a billing setup, this and payments_account will be populated.',
            payments_account_id: {
                _description:
                    'Output only. A 16 digit id used to identify the payments account associated with the billing setup. This must be passed as a string with dashes, e.g. "1234-5678-9012-3456".',
                _type: 'string',
            },
            payments_account_name: {
                _description:
                    'Immutable. The name of the payments account associated with the billing setup. This enables the user to specify a meaningful name for a payments account to aid in reconciling monthly invoices. This name will be printed in the monthly invoices.',
                _type: 'string',
            },
            payments_profile_id: {
                _description:
                    'Immutable. A 12 digit id used to identify the payments profile associated with the billing setup. This must be passed in as a string with dashes, e.g. "1234-5678-9012".',
                _type: 'string',
            },
            payments_profile_name: {
                _description: 'Output only. The name of the payments profile associated with the billing setup.',
                _type: 'string',
            },
            secondary_payments_profile_id: {
                _description:
                    'Output only. A secondary payments profile id present in uncommon situations, e.g. when a sequential liability agreement has been arranged.',
                _type: 'string',
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the billing setup. BillingSetup resource names have the form: <code>customers/{customer_id}/billingSetups/{billing_setup_id}</code>',
            _type: 'string',
        },
        start_date_time: {
            _description:
                'Immutable. The start date time in yyyy-MM-dd or yyyy-MM-dd HH:mm:ss format. Only a future time is allowed.',
            _oneof: 'startTime',
            _type: 'string',
        },
        start_time_type: {
            _description: 'Immutable. The start time as a type. Only NOW is allowed.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NOW', description: 'As soon as possible.' },
                { s: 'FOREVER', description: 'An infinite point in the future.' },
            ],
            _oneof: 'startTime',
            _type: 'enum',
        },
        status: {
            _description: 'Output only. The status of the billing setup.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The billing setup is pending approval.' },
                {
                    s: 'APPROVED_HELD',
                    description:
                        'The billing setup has been approved but the corresponding first budget\nhas not.  This can only occur for billing setups configured for monthly\ninvoicing.',
                },
                { s: 'APPROVED', description: 'The billing setup has been approved.' },
                { s: 'CANCELLED', description: 'The billing setup was cancelled by the user prior to approval.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
