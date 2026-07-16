# Library Management System

A comprehensive library management system built with Django REST Framework backend and React frontend.

## Features

### User Management
- **Multi-role Authentication**: Admin, Librarian, and Patron roles
- **User Profiles**: Comprehensive user information management
- **JWT Authentication**: Secure token-based authentication

### Book Catalog
- **Comprehensive Book Information**: Title, author, ISBN, publisher, publication date
- **Book Status Tracking**: Available, checked out, reserved
- **Search and Filtering**: Find books by various criteria

### Loan Management
- **Book Borrowing**: Check out books to patrons
- **Due Date Tracking**: Automatic due date calculation and overdue detection
- **Return Processing**: Simple book return workflow

### Audit Logging
- **Activity Tracking**: Complete audit trail of all system activities
- **User Action Logs**: Track user logins and actions
- **System Event Logs**: Monitor system-level events

## Technology Stack

### Backend
- **Framework**: Django 4.2+ with Django REST Framework
- **Database**: SQLite (development), PostgreSQL (production ready)
- **Authentication**: JWT tokens via djangorestframework-simplejwt
- **API**: RESTful JSON API with proper HTTP status codes

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: Custom component library
- **State Management**: React Context API

### DevOps
- **Containerization**: Docker and Docker Compose
- **Database**: PostgreSQL with connection pooling
- **Static Files**: Django static file handling

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### Installation

1. **Clone the repository**
