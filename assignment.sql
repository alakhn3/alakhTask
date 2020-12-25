-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2020 at 05:07 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `duration` float DEFAULT NULL,
  `artists` varchar(255) DEFAULT NULL,
  `genres` varchar(255) DEFAULT NULL,
  `watchURL` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `duration`, `artists`, `genres`, `watchURL`, `createdAt`, `updatedAt`) VALUES
(1, 'TestUpdate Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:50:31', '2020-12-25 12:04:01'),
(2, 'TestUpdate Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:51:50', '2020-12-25 12:47:51'),
(3, 'Test2 Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:51:57', '2020-12-25 11:51:57'),
(4, 'Test3 Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:52:04', '2020-12-25 11:52:04'),
(5, 'Test4 Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:52:11', '2020-12-25 11:52:11'),
(6, 'Test41 Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:52:24', '2020-12-25 11:52:24'),
(7, 'Test42 Movies', 'desc test1 movies', 45, 'Test artics', 'poltics', 'www.test.com', '2020-12-25 11:52:33', '2020-12-25 11:52:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'alakh', 'alakh@qversity.com', '$2a$08$kmCQjo2xI8Jn9yfBnz//V./CnV3a8eMPFTJLipxI73hzZ1kKErvii', '2020-12-25 11:10:23', '2020-12-25 11:10:23'),
(2, 'alakh11', 'alakh11@qversity.com', '$2a$08$YDpocDg2yL6YZTRG7lwlz.rOwKiocObKEXOntl1x0I12q4Q1Utqji', '2020-12-25 14:14:07', '2020-12-25 14:14:07');

-- --------------------------------------------------------

--
-- Table structure for table `user_votes`
--

CREATE TABLE `user_votes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `vote` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_votes`
--

INSERT INTO `user_votes` (`id`, `user_id`, `movie_id`, `vote`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'lllll', '2020-12-25 14:12:24', '2020-12-25 14:12:24'),
(3, 2, 3, 'like', '2020-12-25 15:06:39', '2020-12-25 15:06:39'),
(4, 1, 3, 'like', '2020-12-25 15:06:47', '2020-12-25 15:06:47'),
(5, 1, 4, 'like', '2020-12-25 15:12:11', '2020-12-25 15:12:11'),
(6, 1, 5, 'like', '2020-12-25 15:12:16', '2020-12-25 15:12:16'),
(7, 1, 5, 'like', '2020-12-25 15:12:18', '2020-12-25 15:12:18'),
(8, 2, 5, 'like', '2020-12-25 15:12:24', '2020-12-25 15:12:24'),
(9, 2, 6, 'like', '2020-12-25 15:12:41', '2020-12-25 15:12:41'),
(12, 2, 6, 'like', '2020-12-25 15:12:41', '2020-12-25 15:12:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_votes`
--
ALTER TABLE `user_votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_votes`
--
ALTER TABLE `user_votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
