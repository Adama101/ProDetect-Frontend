'use client';

import * as React from 'react';
import { Box, Typography, Paper, Divider, Stack } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Documentation = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
                ProDetect's Platform API provides a comprehensive interface for integrating the platform's 
                capabilities with other banking systems. Our API enables external systems to submit 
                transactions for analysis, retrieve alerts, manage customer profiles, and predict 
                future fraud patterns.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
                Base URL
            </Typography>
            <Typography variant="body1" paragraph>
                The base URL for all API endpoints is:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'https://api.prodetect.co/v1'}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
                Authentication
            </Typography>
            <Typography variant="body1" paragraph>
                All API requests require a Private and Public API key. Include the API keys in the request header as follows:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "Authorization": "Bearer <your_api_key>",
                        "Bearer <your_api_key>"
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
                Endpoints
            </Typography>
            <Typography variant="h6" gutterBottom>
                1. Transactions
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Submit a Transaction
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'POST /transactions'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Submit a transaction for analysis.
            </Typography>
            <Typography variant="body1" paragraph>
                Request Body:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "transaction_id": "string",
    "customer_id": "string",
    "amount": "number",
    "currency": "string",
    "transaction_date": "string (ISO 8601)",
    "transaction_type": "string",
    "description": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "status": "string",
    "analysis_result": {
        "risk_score": "number",
        "alerts": [
            {
                "alert_id": "string",
                "description": "string"
            }
        ]
    }
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
                Get Transaction Status
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'GET /transactions/{transaction_id}'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Retrieve the status and analysis result of a submitted transaction.
            </Typography>
            <Typography variant="body1" paragraph>
                Path Parameters:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "transaction_id": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "transaction_id": "string",
    "status": "string",
    "analysis_result": {
        "risk_score": "number",
        "alerts": [
            {
                "alert_id": "string",
                "description": "string"
            }
        ]
    }
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
                2. Alerts
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Retrieve Alerts
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'GET /alerts'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Retrieve a list of alerts generated by the AML monitoring platform.
            </Typography>
            <Typography variant="body1" paragraph>
                Query Parameters:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "customer_id": "string (optional)",
    "status": "string (optional)",
    "date_from": "string (optional, ISO 8601)",
    "date_to": "string (optional, ISO 8601)"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "alerts": [
        {
            "alert_id": "string",
            "customer_id": "string",
            "description": "string",
            "risk_score": "number",
            "status": "string",
            "created_at": "string (ISO 8601)",
            "updated_at": "string (ISO 8601)"
        }
    ]
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
                Update Alert Status
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'PATCH /alerts/{alert_id}'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Update the status of an alert.
            </Typography>
            <Typography variant="body1" paragraph>
                Path Parameters:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "alert_id": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Request Body:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "status": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "alert_id": "string",
    "status": "string",
    "updated_at": "string (ISO 8601)"
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
                3. Customers
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Create or Update Customer Profile
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'PUT /customers'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Create a new customer profile or update an existing one.
            </Typography>
            <Typography variant="body1" paragraph>
                Request Body:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "customer_id": "string",
    "name": "string",
    "date_of_birth": "string (ISO 8601)",
    "address": "string",
    "phone_number": "string",
    "email": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "customer_id": "string",
    "status": "string"
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
                Get Customer Profile
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'GET /customers/{customer_id}'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Retrieve the profile of a customer.
            </Typography>
            <Typography variant="body1" paragraph>
                Path Parameters:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "customer_id": "string"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "customer_id": "string",
    "name": "string",
    "date_of_birth": "string (ISO 8601)",
    "address": "string",
    "phone_number": "string",
    "email": "string",
    "status": "string",
    "created_at": "string (ISO 8601)",
    "updated_at": "string (ISO 8601)"
}`}
            </SyntaxHighlighter>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
                4. Audit Logs
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Retrieve Audit Logs
            </Typography>
            <Typography variant="body1" paragraph>
                Endpoint:
            </Typography>
            <SyntaxHighlighter language="plaintext" style={materialOceanic}>
                {'GET /audit-logs'}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Description: Retrieve a list of audit logs for all actions performed on the platform.
            </Typography>
            <Typography variant="body1" paragraph>
                Query Parameters:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "date_from": "string (optional, ISO 8601)",
    "date_to": "string (optional, ISO 8601)",
    "action_type": "string (optional)"
}`}
            </SyntaxHighlighter>
            <Typography variant="body1" paragraph>
                Response:
            </Typography>
            <SyntaxHighlighter language="json" style={materialOceanic}>
                {`{
    "audit_logs": [
        {
            "log_id": "string",
            "user_id": "string",
            "action_type": "string",
            "description": "string",
            "created_at": "string (ISO 8601)"
        }
    ]
}`}
            </SyntaxHighlighter>
        </Box>
    );
};

export default Documentation;
