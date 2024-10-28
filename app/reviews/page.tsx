'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    rating: 5,
    date: '2024-02-15',
    comment: 'Amazing experience! The destinations were breathtaking and the service was impeccable.',
    destination: 'Paris, France',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    rating: 4,
    date: '2024-02-10',
    comment: 'Great trip overall. The guides were knowledgeable and friendly.',
    destination: 'Tokyo, Japan',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    date: '2024-02-05',
    comment: 'Unforgettable journey! Every detail was perfectly planned.',
    destination: 'New York, USA',
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Customer Reviews</h1>
        <p className="text-muted-foreground">
          See what our travelers have to say about their experiences.
        </p>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{review.comment}</p>
              <p className="text-sm font-medium">
                Destination: {review.destination}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}