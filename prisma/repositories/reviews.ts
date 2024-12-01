import prisma from '@/prisma'
import { Status } from '@prisma/client'

export async function getApprovedReviews() {
  return await prisma.review.findMany({
    where: {
      status: Status.APPROVED
    },
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id: true,
      name: true,
      destination: true,
      serviceRating: true,
      review: true,
      avatar: true,
      createdAt: true
    }
  })
}

export async function createReview(data: {
  name: string
  email: string
  destination: string
  serviceRating: number
  review: string
}) {
  return await prisma.review.create({
    data: {
      ...data,
      avatar: `/api/placeholder/${Math.floor(Math.random() * 1000)}`
    }
  })
}

// Admin functions
export async function getPendingReviews() {
  return await prisma.review.findMany({
    where: {
      status: Status.PENDING
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function updateReviewStatus(id: string, status: Status) {
  return await prisma.review.update({
    where: { id },
    data: { status }
  })
}